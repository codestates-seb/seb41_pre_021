package stackoverflow.backend.member.entity;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import stackoverflow.backend.member.repository.MemberRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberTest {
    @Autowired
    MemberRepository memberRepository;

    @Test
    void createMemberTest() {
        Member member = new Member("admin@gmail.clm","1111","hdk",150);

        memberRepository.save(member);

        Optional<Member> findMember = memberRepository.findById(1L);
        Assertions.assertThat(findMember.isPresent()).isTrue();
        Assertions.assertThat(findMember.get().getUserName()).isEqualTo("hdk");


    }
}