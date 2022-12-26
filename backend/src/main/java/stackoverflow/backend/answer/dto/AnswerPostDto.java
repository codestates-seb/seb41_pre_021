package stackoverflow.backend.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;


@Getter
public class AnswerPostDto {
    @Positive
    private Long memberId;
    @NotBlank(message = "답볍을 작성하세요.")
    @Size(min = 20, message = "최소 20자이상 작성하십시오")
    private String content;

  //  @Positive
  //  private long memberId;

    @Positive
    private long questionId;

}