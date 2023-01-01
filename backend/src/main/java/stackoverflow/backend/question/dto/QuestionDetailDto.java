package stackoverflow.backend.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import stackoverflow.backend.questioncomment.dto.QuestionCommentResponseDto;
import stackoverflow.backend.questioncomment.entity.QuestionComment;
import stackoverflow.backend.vote.entity.Vote;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionDetailDto {

    private QuestionPart questionPart;
    private MemberPart memberPart;
    private List<AnswerPart> answerPart;

    @Getter
    @Setter
    public static class QuestionPart {
        private String questionTitle;
        private String modified;
        private long questionId;
        private boolean isAdopt;
        private String content;
        private int views;
        private List<String> tags;
        private int questionVoteCnt;
        private String asked;
        private Vote.VoteStatus viewerVoteStatus = Vote.VoteStatus.NONE;
        private List<QuestionCommentDto> questionComments;
    }

    @Getter
    @Setter
    public static class MemberPart {
        private long memberId;
        private String username;
        private String image;
        private int reputation;
    }

    @Getter
    @Setter
    public static class AnswerPart {
        private String content;
        private long answerId;
        private boolean isAccepted;
        private int answerVoteCnt;
        private long memberId;
        private String username;
        private int reputation;
        private String image;
        private Vote.VoteStatus viewerVoteStatus = Vote.VoteStatus.NONE;
        private String createdAt;
        private String modifiedAt;
        private List<AnswerCommentDto> answerComments;
    }

    @Getter
    @Setter
    public static class QuestionCommentDto {
        private long memberId;
        private long questionCommentId;
        private String username;
        private String content;
        private String createdAt;
    }

    @Getter
    @Setter
    public static class AnswerCommentDto {
        private long memberId;
        private long answerCommentId;
        private String username;
        private String content;
        private String createdAt;
    }
}
