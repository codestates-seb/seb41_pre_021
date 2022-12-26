package stackoverflow.backend.answercomment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


    @Getter
    @Setter
    public class AnswerCommentPatchDto {

        private long memberId;
        private long answerCommentId;

        @NotBlank(message = "답변을 작성하세요.")
        @Size(min = 20, message = "최소 20자이상 작성하십시오")
        private String content;
    }

