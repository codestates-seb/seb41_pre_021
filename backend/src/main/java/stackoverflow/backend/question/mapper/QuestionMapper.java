package stackoverflow.backend.question.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.mapper.MemberMapper;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.dto.QuestionPatchDto;
import stackoverflow.backend.question.dto.QuestionPostDto;
import stackoverflow.backend.question.dto.QuestionResponseDto;
import stackoverflow.backend.question.entity.Question;

import java.time.LocalDateTime;
import java.util.List;


@Mapper(componentModel = "spring")
public interface QuestionMapper {
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionPostToQuestion(MemberService memberService, QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();
        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        question.setQuestionTitle( questionPostDto.getQuestionTitle() );
        question.setContent( questionPostDto.getContent() );
        question.setMember(memberService.findMember(member.getMemberId()));

        question.setCreatedAt(LocalDateTime.now());
        question.setModifiedAt(LocalDateTime.now());

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionPatchDto requestBody) {
        Question question = new Question();

        question.setQuestionId(requestBody.getQuestionId());
        question.setQuestionTitle(requestBody.getQuestionTitle());
        question.setContent(requestBody.getContent());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponse(MemberMapper memberMapper, Question question) {
        if ( question == null ) {
            return null;
        }


        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setQuestionTitle( question.getQuestionTitle() );
        questionResponseDto.setContent( question.getContent() );
        questionResponseDto.setViews(question.getViews());
        questionResponseDto.setCreatedAt(question.getCreatedAt());

        Member member = question.getMember();
        questionResponseDto.setMember(memberMapper.memberToMemberResponseDto(member));


        return questionResponseDto;
    }

    default MemberResponseDto memberToMemberResponseDto(Member member){
        if ( Member = null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto;

        memberResponseDto.setMemberId( member.getMemberId() );
        memberResponseDto.setEmail( member.getEmail() );
        memberResponseDto.setUsername( member.getUsername() );
        memberResponseDto.setPassword( member.getPassword() );
        memberResponseDto.setReputation( member.getReputation() );

        return memberResponseDto;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setMember( memberToMemberResponseDto( question.getMember() ) );
        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setQuestionTitle( question.getQuestionTitle() );
        questionResponseDto.setContent( question.getContent() );
        questionResponseDto.setViews(question.getViews());
        questionResponseDto.setCreatedAt( question.getCreatedAt() );
        questionResponseDto.setModifiedAt( question.getModifiedAt() );

        return questionResponseDto;
    }
}