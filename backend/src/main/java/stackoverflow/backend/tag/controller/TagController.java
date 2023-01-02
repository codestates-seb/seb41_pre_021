package stackoverflow.backend.tag.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.backend.tag.dto.TagDto;
import stackoverflow.backend.tag.dto.TagsResponseDto;
import stackoverflow.backend.tag.service.TagService;

import javax.validation.constraints.Positive;
import java.util.List;

@RequestMapping("/tags")
@RequiredArgsConstructor
@RestController
public class TagController {

    private final TagService tagService;

    @GetMapping
    public ResponseEntity getTags(@Positive @RequestParam(defaultValue = "1") int page,
                                  @Positive @RequestParam(defaultValue = "36") int size,
                                  @RequestParam(defaultValue = "popular") String tab) {
        Page<TagDto> pagedTags = tagService.findTags(page-1,size,tab);

        List<TagDto> tags = pagedTags.getContent();
        return new ResponseEntity(new TagsResponseDto<>(tags,pagedTags), HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity getFilteredTags(@RequestParam("name") String name) {
        List<TagDto> withFilter = tagService.findWithFilter("%" + name + "%");

        return new ResponseEntity(withFilter, HttpStatus.OK);
    }
}
