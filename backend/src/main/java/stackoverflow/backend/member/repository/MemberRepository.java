package stackoverflow.backend.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
