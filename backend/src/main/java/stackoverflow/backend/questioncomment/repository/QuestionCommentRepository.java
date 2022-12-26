package stackoverflow.backend.questioncomment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.questioncomment.entity.QuestionComment;

public interface QuestionCommentRepository extends JpaRepository<QuestionComment,Long> {
}
