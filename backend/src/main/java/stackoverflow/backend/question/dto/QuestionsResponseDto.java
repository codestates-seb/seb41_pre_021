package stackoverflow.backend.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import stackoverflow.backend.tag.entity.Tag;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionsResponseDto {

    private QuestionPart questionPart;
    private MemberPart memberPart;

    @Getter
    @Setter
    public static class QuestionPart {
        private long questionId;
        private String questionTitle;
        private String content;
        private int views;
        private List<QuestionsTagPart> tags;
        private int questionVoteCnt;
        private int answerCnt;
        private String asked;
        private boolean isAdopted;
    }

    @Getter
    @Setter
    public static class MemberPart {
        private String username;
        //profileImg
        private int reputation;
    }

    @Getter
    @Setter
    public static class QuestionsTagPart {
        private long tagId;
        private String tagName;
        private String tagDescription;
    }
}
