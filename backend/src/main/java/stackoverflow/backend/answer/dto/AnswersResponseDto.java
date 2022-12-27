package stackoverflow.backend.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;


@Getter
@Setter
@AllArgsConstructor
public class AnswersResponseDto {

    private Question question;
    private Member member;
    private String content;
    private boolean accepted;
}
