package stackoverflow.backend.question.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class QuestionPatchDto {
    private long questionId;
    private String questionTitle;
    private String content;

    @JsonProperty("tags")
    List<QuestionPatchTagDto> questionPatchTagDtos;

//    public void setQuestionId(long questionId) {
//
//        this.questionId = questionId;
//    }
}

