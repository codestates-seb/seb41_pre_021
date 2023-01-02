package stackoverflow.backend.questiontag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.questiontag.entity.QuestionTag;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {

    @Query("delete from QuestionTag qt where qt.question.questionId = :questionId")
    @Modifying
    @Transactional
    void deleteAllByQuestionId(long questionId);
}
