package stackoverflow.backend.questioncomment.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.questioncomment.dto.QuestionCommentPatchDto;
import stackoverflow.backend.questioncomment.dto.QuestionCommentPostDto;
import stackoverflow.backend.questioncomment.entity.QuestionComment;

@Mapper(componentModel = "spring")
public interface QuestionCommentMapper {

    default QuestionComment questionCommentPostDtoToQuestion(QuestionCommentPostDto questionCommentPostDto) {
        QuestionComment questionComment = new QuestionComment();
        Member member = new Member();
        member.setMemberId(questionCommentPostDto.getMemberId());
        Question question = new Question();
        question.setQuestionId(questionCommentPostDto.getQuestionId());
        questionComment.setMember(member);
        questionComment.setQuestion(question);
        questionComment.setContent(questionCommentPostDto.getContent());

        return questionComment;
    }

    default QuestionComment questionCommentPatchDtoToQuestion(QuestionCommentPatchDto questionCommentPatchDto) {
        QuestionComment questionComment = new QuestionComment();
        Member member = new Member();
        member.setMemberId(questionCommentPatchDto.getMemberId());
        questionComment.setMember(member);
        questionComment.setContent(questionCommentPatchDto.getContent());
        questionComment.setQuestionCommentId(questionCommentPatchDto.getQuestionCommentId());
        return questionComment;
    }
}
