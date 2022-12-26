package stackoverflow.backend.tag.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.tag.entity.Tag;
import stackoverflow.backend.tag.repository.TagRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public List<Tag> createTags(List<String> tagNames) {
        List<Tag> tags = new ArrayList<>();

        tagNames.forEach(tagName -> {
            Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);
            if(optionalTag.isPresent()) {
                tags.add(optionalTag.get());
            } else {
                Tag tag = new Tag();
                tag.setTagName(tagName);
                tagRepository.save(tag);
                tags.add(tag);
            }
        });

        return tags;
    }

}
