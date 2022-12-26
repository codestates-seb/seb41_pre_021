package stackoverflow.backend.questioncomment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.questioncomment.entity.QuestionComment;
import stackoverflow.backend.questioncomment.repository.QuestionCommentRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionCommentService {

    private final QuestionCommentRepository questionCommentRepository;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;

    public QuestionComment createQuestionComment(QuestionComment questionComment) {
        Question question = questionService.findVerifyQuestion(questionComment.getQuestion().getQuestionId());
        Member member = memberService.findVerifiedMember(questionComment.getMember().getMemberId());

        questionComment.setMember(member);
        questionComment.setQuestion(question);
        return questionCommentRepository.save(questionComment);
    }

    public QuestionComment updateQuestionComment(QuestionComment questionComment, String token) {
        long memberId = jwtTokenizer.getMemberId(token);

        QuestionComment findQuestionComment = findVerifiedQuestionComment(questionComment.getQuestionCommentId());
        if(findQuestionComment.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        findQuestionComment.setContent(questionComment.getContent());
        return findQuestionComment;
    }

    public QuestionComment findVerifiedQuestionComment(long questionCommentId) {
        System.out.println("questionCommentId = " + questionCommentId);
        Optional<QuestionComment> optionalQuestionComment = questionCommentRepository.findById(questionCommentId);

        return optionalQuestionComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_COMMENT_NOT_FOUND));
    }
}
