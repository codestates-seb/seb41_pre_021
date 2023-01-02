package stackoverflow.backend.answer.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.answer.dto.AnswerDetailDto;
import stackoverflow.backend.answer.dto.AnswerPatchDto;
import stackoverflow.backend.answer.dto.AnswerPostDto;
import stackoverflow.backend.answer.dto.AnswerResponseDto;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;

@Mapper(componentModel = "spring")
public interface AnswerMapper {


    default Answer answerPostDtoToAnswer(AnswerPostDto requestBody) {
        Answer answer = new Answer();
        Member member = new Member();
        Question question = new Question();

        member.setMemberId(requestBody.getMemberId());
        question.setQuestionId(requestBody.getQuestionId());

        answer.setContent(requestBody.getContent());
        answer.setMember(member);
        answer.setQuestion(question);

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        AnswerResponseDto response = new AnswerResponseDto();

        response.setAnswerId(answer.getAnswerId());
        response.setContent(answer.getContent());
        response.setMemberId(answer.getMember().getMemberId());
        return response;
    }
    default AnswerDetailDto answerToAnswerDetailDto(Answer answer) {
        AnswerDetailDto answerDetailDto = new AnswerDetailDto();

        answerDetailDto.setAnswerId(answer.getAnswerId());
        answerDetailDto.setMemberId(answer.getMember().getMemberId());
        answerDetailDto.setUsername(answer.getMember().getUsername());
        answerDetailDto.setContent(answer.getContent());
        answerDetailDto.setModified(answer.getModifiedAt());
        answerDetailDto.setAccepted(answer.isAccepted());

        return answerDetailDto;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto requestBody) {
        Answer answer = new Answer();
        Member member = new Member();


        member.setMemberId(requestBody.getMemberId());
        answer.setAnswerId(requestBody.getAnswerId());
        answer.setContent(requestBody.getContent());
        answer.setMember(member);

        return answer;
    }

}