package stackoverflow.backend.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.tag.entity.Tag;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag,Long> {

    Optional<Tag> findByTagName(String tagName);
}
