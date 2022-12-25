package stackoverflow.backend.question.dto;


import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class QuestionPatchDto {
    private long questionId;
    private String questionTitle;
    private String content;

    public void setQuestionId(long questionId) {

        this.questionId = questionId;
    }
}

