package stackoverflow.backend.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerDetailDto {

    private long memberId;
    private long answerId;
    private String username;
    private String content;
    private LocalDateTime modified;
    private boolean accepted;

}
