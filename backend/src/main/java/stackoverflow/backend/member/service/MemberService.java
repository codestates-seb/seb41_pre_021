package stackoverflow.backend.member.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.repository.MemberRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService{

    private final MemberRepository memberRepository;

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail()); //등록된 이메일인지 확인
        return memberRepository.save(member);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId()); //ID로 멤버 존재 확인하고 Member 정보 반환
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

}



