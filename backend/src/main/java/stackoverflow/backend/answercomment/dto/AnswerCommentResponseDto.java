package stackoverflow.backend.answercomment.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerCommentResponseDto {
    private long answerId;
    private long memberId;
    private String content;
}