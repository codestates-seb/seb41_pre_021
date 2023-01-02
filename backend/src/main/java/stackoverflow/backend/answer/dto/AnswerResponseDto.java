package stackoverflow.backend.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private long memberId;


    private String content;

}