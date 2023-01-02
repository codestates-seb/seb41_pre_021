package stackoverflow.backend.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);
    List<Question> findAllByMember(Member member);

    @Query("select q from Question q where q.isAdopted = false")
    Page<Question> findAllByUnAccepted(Pageable pageable);

    List<Question> findTop50ByOrderByQuestionIdDesc();

    Page<Question> findQuestionsByContentContaining(Pageable pageable, String keyword);
}