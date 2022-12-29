package stackoverflow.backend.tag.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;
import stackoverflow.backend.response.PageInfo;

import java.util.List;

@Getter
public class TagsResponseDto<T> {


    private List<T> tags;
    private PageInfo pageInfo;

    public TagsResponseDto(List<T> tags, Page page) {
        this.tags = tags;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}
