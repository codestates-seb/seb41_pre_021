package stackoverflow.backend.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);
   // List<Question> findAllByMember(Member member);

}