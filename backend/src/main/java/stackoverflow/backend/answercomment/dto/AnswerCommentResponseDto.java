package stackoverflow.backend.answercomment.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerCommentResponseDto {
    private long answerId;
    private long answerCommentId;
    private long memberId;
    private String username;
    private String content;
}