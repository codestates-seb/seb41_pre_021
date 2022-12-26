package stackoverflow.backend.questioncomment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionCommentResponseDto {

    private long questionId;
    private long memberId;
    private String content;
}
