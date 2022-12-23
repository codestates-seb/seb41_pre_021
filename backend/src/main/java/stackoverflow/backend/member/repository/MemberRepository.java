package stackoverflow.backend.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.member.entity.Member;

import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member,Long> {
    Member findByEmail(String email);
    Member findByMemberId(Long memberId);
}
}
