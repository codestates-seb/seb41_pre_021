package stackoverflow.backend.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.vote.entity.Vote;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote,Long> {

    Optional<Vote> findByQuestionAndMember(Question question, Member member);
}
