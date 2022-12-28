package stackoverflow.backend.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TagDto {

    private long tagId;
    private String tagName;
    private String Description;
    private long count;

}
