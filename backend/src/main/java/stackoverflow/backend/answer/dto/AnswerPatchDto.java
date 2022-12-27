package stackoverflow.backend.answer.dto;


import lombok.Getter;

@Getter
public class AnswerPatchDto {
    private long answerId;
    private String content;
    private long memberId;

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}