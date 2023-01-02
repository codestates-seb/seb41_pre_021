package stackoverflow.backend.question.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class QuestionPostDto {
    @Positive
    private Long memberId;

    @NotBlank(message = "제목을 작성하세요")
    @Size(min = 5, message = "최소 5자이상 작성하십시오")
    private String questionTitle;

    @NotBlank(message = "질문을 작성하세요.")
    @Size(min = 20, message = "최소 20자이상 작성하십시오")
    private String content;

    @JsonProperty("tags")
    List<QuestionPostTagDto> questionPostTagDtos;
}
