package stackoverflow.backend.answer.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;
    private long memberId;
    private String content;

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}