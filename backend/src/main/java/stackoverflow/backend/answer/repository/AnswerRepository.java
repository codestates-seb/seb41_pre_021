package stackoverflow.backend.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.question.entity.Question;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question);
    // Answer findByAnswerId(Long answerId);
   // List<Answer> findAllByMember(Member member);
}

