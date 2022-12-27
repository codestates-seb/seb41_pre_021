package stackoverflow.backend.answer.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;
    private String content;
    private long memberId;

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}