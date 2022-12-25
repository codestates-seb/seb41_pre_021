package stackoverflow.backend.question.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.mapper.MemberMapper;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.dto.QuestionPatchDto;
import stackoverflow.backend.question.dto.QuestionPostDto;
import stackoverflow.backend.question.dto.QuestionPostTagDto;
import stackoverflow.backend.question.dto.QuestionResponseDto;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.questiontag.entity.QuestionTag;
import stackoverflow.backend.tag.entity.Tag;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface QuestionMapper {
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        question.setQuestionTitle(questionPostDto.getQuestionTitle());
        question.setContent(questionPostDto.getContent());

        return question;
    }

    default List<String> questionPostDtoToTags(QuestionPostDto questionPostDto) {
        List<QuestionPostTagDto> questionPostTagDtos = questionPostDto.getQuestionPostTagDtos();
        return questionPostTagDtos.stream()
                .map(s -> new String(s.getTagName()))
                .collect(Collectors.toList());
    }

//    default Question questionPostToQuestion(QuestionPostDto questionPostDto) {
//
//
//        Question question = new Question();
//        Member member = new Member();
//        member.setMemberId(questionPostDto.getMemberId());
//
//        question.setQuestionTitle(questionPostDto.getQuestionTitle());
//        question.setContent(questionPostDto.getContent());
//
//        QuestionTag questionTag = new QuestionTag();
//
//
//        question.setMember(member);
//
//
//        return question;
//    }

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

        Member member = question.getMember();
        questionResponseDto.setMember(memberMapper.memberToMemberResponseDto(member));


        return questionResponseDto;
    }

    default MemberResponseDto memberToMemberResponseDto(Member member){
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

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

        questionResponseDto.setMember( memberToMemberResponseDto  ( question.getMember() ) );
        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setQuestionTitle( question.getQuestionTitle() );
        questionResponseDto.setContent( question.getContent() );
        questionResponseDto.setViews(question.getViews());

        return questionResponseDto;
    }
}