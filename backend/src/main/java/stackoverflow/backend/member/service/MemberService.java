package stackoverflow.backend.member.service;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.auth.utils.CustomAuthorityUtils;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.repository.MemberRepository;
import stackoverflow.backend.profileimage.entity.ProfileImage;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final JwtTokenizer jwtTokenizer;

    @Value("${file.dir}")
    private String fileDir;

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles();
        member.setRoles(roles);

        ProfileImage profileImage = new ProfileImage();
        profileImage.setUploadFileName("default.png");
        profileImage.setStoreFileName(fileDir + "default.png");
        profileImage.setMember(member);
        member.setProfileImage(profileImage);

        return memberRepository.save(member);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Member updateMember(Member member,String token) {
        if(member.getMemberId() != jwtTokenizer.getMemberId(token)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getUsername()).ifPresent(username -> findMember.setUsername(username));
        Optional.ofNullable(member.getPassword()).ifPresent(password -> findMember.setPassword(passwordEncoder.encode(member.getPassword())));
        return findMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if(member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    @Transactional(readOnly = true)
    public Page<Member> findMemberList(int page, int size, String tab) {
        String filter = "memberId";
        if (tab.equals("reputation")) {
            filter = "reputation";
        }
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by(filter).descending()));
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member;
    }


}

