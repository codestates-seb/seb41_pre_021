package stackoverflow.backend.answer.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;
    private long memberId;

    @NotBlank(message = "답볍을 작성하세요.")
    @Size(min = 20, message = "최소 20자이상 작성하십시오")
    private String content;

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}