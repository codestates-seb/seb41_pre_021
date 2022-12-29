package stackoverflow.backend.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerAdoptDto {
    private long memberId;
    private long answerId;
}
