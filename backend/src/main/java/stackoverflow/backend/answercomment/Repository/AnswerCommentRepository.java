package stackoverflow.backend.answercomment.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.answercomment.entity.AnswerComment;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment,Long> {

}