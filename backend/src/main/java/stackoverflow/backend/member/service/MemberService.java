package stackoverflow.backend.member.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.repository.MemberRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());
        return memberRepository.save(member);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());
        return memberRepository.save(findMember);
    }

    private void verifyExistsEmail(String email) {
        Member member = memberRepository.findByEmail(email);

        if (member != null) {
            throw new IllegalStateException();
        }
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new IllegalStateException());
        return findMember;
    }

//    @Transactional(readOnly = true)
//    public Page<Member> findMemberList(int page, int size) {
//        return memberRepository.findAll(PageRequest.of(page, size,
//                Sort.by("memberId").descending()));
//    }

    @Transactional(readOnly = true)
    public Page<Member> findMemberList(int page, int size, String tab) {
        String filter = "memberId";
        if (tab.equals("reputation")) {
            filter = "reputation";
        }
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by(filter).descending()));
    }
}



