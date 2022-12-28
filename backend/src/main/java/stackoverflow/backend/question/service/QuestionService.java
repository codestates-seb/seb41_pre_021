package stackoverflow.backend.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.repository.QuestionRepository;
import stackoverflow.backend.questioncomment.entity.QuestionComment;
import stackoverflow.backend.questioncomment.repository.QuestionCommentRepository;
import stackoverflow.backend.questioncomment.service.QuestionCommentService;
import stackoverflow.backend.questiontag.service.QuestionTagService;
import stackoverflow.backend.tag.entity.Tag;
import stackoverflow.backend.tag.service.TagService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    private final TagService tagService;
    private final QuestionTagService questionTagService;
    private final JwtTokenizer jwtTokenizer;
//    private final QuestionCommentRepository questionCommentRepository;


    //게시글 생성
//    public Question createQuestion(String email, Question question, List<String> tagNames) {
//        Member findMember = memberService.findVerifiedMember(email);
//        if (!findMember.getEmail().equals(email)) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
//        }
//
//        if (question.getMember().getMemberId() != findMember.getMemberId()) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
//        }
//        question.setMember(findMember);
//
//        List<Tag> tagLists = tagService.createTags(tagNames);
//        Question result = questionRepository.save(question);
//        questionTagService.createQuestionTagWithQuestion(tagLists, question);
//
//        return result;
//    }

    public Question createQuestion(String token, Question question, List<String> tagNames) {
        long memberId = jwtTokenizer.getMemberId(token);
        if(question.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }
        Member findMember = memberService.findVerifiedMember(memberId);

        question.setMember(findMember);

        List<Tag> tagLists = tagService.createTags(tagNames);
        Question result = questionRepository.save(question);
        questionTagService.createQuestionTagWithQuestion(tagLists, question);

        return result;
    }

    //게시글 수정
    public Question updateQuestion(Question question,List<String> tagNames) {

        Question findQuestion = findVerifyQuestion(question.getQuestionId());
        findQuestion.getMember();

        List<Tag> tagLists = tagService.createTags(tagNames);
        questionTagService.deleteAllQuestionTag(findQuestion.getQuestionId());
        questionTagService.createQuestionTagWithQuestion(tagLists, findQuestion);

        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(title -> findQuestion.setQuestionTitle(title));
        return questionRepository.save(findQuestion);
    }


    public Question findGetQuestion(Long questionId) {
        Question question = findVerifyQuestion(questionId);
        question.setViews(question.getViews() + 1);
        questionRepository.save(question);
        return question;
    }

    public Page<Question> findQuestions(int page, int size, String tab) {
        if(tab.equals("Newest")) {
            return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
        }
        return questionRepository.findAllByUnAccepted(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public Question findVerifyQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }


    public void deleteQuestion(String token, Long questionId) {
        long userId = jwtTokenizer.getMemberId(token);
        Question question = findVerifyQuestion(questionId);
        if(question.getMember().getMemberId() != userId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }
        questionTagService.deleteAllQuestionTag(question.getQuestionId());
        questionRepository.delete(question);
    }

}