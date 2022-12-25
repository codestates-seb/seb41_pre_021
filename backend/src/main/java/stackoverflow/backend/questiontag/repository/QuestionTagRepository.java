package stackoverflow.backend.questiontag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.questiontag.entity.QuestionTag;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
}
