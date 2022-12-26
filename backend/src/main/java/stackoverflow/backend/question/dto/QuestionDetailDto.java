package stackoverflow.backend.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionDetailDto {

    private QuestionPart questionPart;
    private MemberPart memberPart;
    //private AnswerPart answerPart;

    @Getter
    @Setter
    public static class QuestionPart {
        private String questionTitle;
        private String content;
        private int views;
        private List<String> tags;
        //보트 private int questionVoteCnt;
        private String asked;
        private String modified;
    }

    @Getter
    @Setter
    public static class MemberPart {
        private long memberId;
        private String username;
        //profileImg
        private int reputation;
    }

    //static class AnswerPart
}
