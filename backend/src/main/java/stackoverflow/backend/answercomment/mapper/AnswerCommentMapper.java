package stackoverflow.backend.answercomment.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.answercomment.dto.AnswerCommentPatchDto;
import stackoverflow.backend.answercomment.dto.AnswerCommentPostDto;
import stackoverflow.backend.answercomment.dto.AnswerCommentResponseDto;
import stackoverflow.backend.answercomment.entity.AnswerComment;
import stackoverflow.backend.member.entity.Member;

@Mapper(componentModel = "spring")
public interface AnswerCommentMapper {

    default AnswerComment answerCommentPostDtoToAnswer(AnswerCommentPostDto answerCommentPostDto) {
        AnswerComment answerComment = new AnswerComment();
        Member member = new Member();
        member.setMemberId(answerCommentPostDto.getMemberId());
        Answer answer = new Answer();
        answer.setAnswerId(answerCommentPostDto.getAnswerId());
        answerComment.setMember(member);
        answerComment.setAnswer(answer);
        answerComment.setContent(answerCommentPostDto.getContent());

        return answerComment;
    }

    default AnswerComment answerCommentPatchDtoToAnswer(AnswerCommentPatchDto answerCommentPatchDto) {
        AnswerComment answerComment = new AnswerComment();
        Member member = new Member();
        member.setMemberId(answerCommentPatchDto.getMemberId());
        answerComment.setMember(member);
        answerComment.setContent(answerCommentPatchDto.getContent());
        answerComment.setAnswerCommentId(answerCommentPatchDto.getAnswerCommentId());
        return answerComment;
    }

    default AnswerCommentResponseDto answerToAnswerCommentResponseDto(AnswerComment answerComment) {
        AnswerCommentResponseDto answerCommentResponseDto = new AnswerCommentResponseDto();
        answerCommentResponseDto.setAnswerId(answerComment.getAnswer().getAnswerId());
        answerCommentResponseDto.setMemberId(answerComment.getMember().getMemberId());
        answerCommentResponseDto.setContent(answerComment.getContent());
        answerCommentResponseDto.setUsername(answerComment.getMember().getUsername());
        answerCommentResponseDto.setAnswerCommentId(answerComment.getAnswerCommentId());
        return answerCommentResponseDto;
    }
}