package stackoverflow.backend.questioncomment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class QuestionCommentPostDto {

    private long questionId;
    private long memberId;
    private long questionCommentId;

    @NotBlank(message = "질문을 작성하세요.")
    @Size(min = 20, message = "최소 20자이상 작성하십시오")
    private String content;
}
