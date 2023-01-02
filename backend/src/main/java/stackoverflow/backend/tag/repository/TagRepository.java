package stackoverflow.backend.tag.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stackoverflow.backend.tag.dto.TagDto;
import stackoverflow.backend.tag.entity.Tag;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag,Long> {

    Optional<Tag> findByTagName(String tagName);

    @Query("select " +
            "new stackoverflow.backend.tag.dto.TagDto(t.tagId , t.tagName, t.tagDescription, count(qt.tag.tagId)) from" +
            " Tag t left join QuestionTag qt on t.tagId = qt.tag.tagId group by t.tagName order by count(qt.tag.tagId) desc")
    Page<TagDto> findTagsWithPopular(Pageable pageable);

    @Query("select " +
            "new stackoverflow.backend.tag.dto.TagDto(t.tagId , t.tagName, t.tagDescription, count(qt.tag.tagId)) from" +
            " Tag t left join QuestionTag qt on t.tagId = qt.tag.tagId group by t.tagName order by  length(t.tagName),t.tagName")
    Page<TagDto> findTagsWithName(Pageable pageable);

    @Query("select " +
            "new stackoverflow.backend.tag.dto.TagDto(t.tagId , t.tagName, t.tagDescription, count(qt.tag.tagId)) from" +
            " Tag t left join QuestionTag qt on t.tagId = qt.tag.tagId group by t.tagName order by t.tagId desc")
    Page<TagDto> findTagsWithNew(Pageable pageable);

    @Query("select " +
            "new stackoverflow.backend.tag.dto.TagDto(t.tagId , t.tagName, t.tagDescription, count(qt.tag.tagId)) from" +
            " Tag t left join QuestionTag qt on t.tagId = qt.tag.tagId where t.tagName like :name group by t.tagName order by t.tagName")
    Page<TagDto> findTagsWithFilter(Pageable pageable,String name);
}
