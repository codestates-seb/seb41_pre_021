package stackoverflow.backend.answercomment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.answer.service.AnswerService;
import stackoverflow.backend.answercomment.Repository.AnswerCommentRepository;
import stackoverflow.backend.answercomment.entity.AnswerComment;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerCommentService {

    private final AnswerCommentRepository answerCommentRepository;
    private final AnswerService answerService;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;

    public AnswerComment createAnswerComment(AnswerComment answerComment) {
        Answer answer = answerService.findVerifiedAnswer(answerComment.getAnswer().getAnswerId());
        Member member = memberService.findVerifiedMember(answerComment.getMember().getMemberId());

        answerComment.setMember(member);
        answerComment.setAnswer(answer);
        return answerCommentRepository.save(answerComment);
    }

    public AnswerComment updateAnswerComment(AnswerComment answerComment, String token) {
        long memberId = jwtTokenizer.getMemberId(token);

        AnswerComment findAnswerComment = findVerifiedAnswerComment(answerComment.getAnswerCommentId());
        if(findAnswerComment.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        findAnswerComment.setContent(answerComment.getContent());
        return findAnswerComment;
    }

    public AnswerComment findVerifiedAnswerComment(long answerCommentId) {
        System.out.println("answerCommentId = " + answerCommentId);
        Optional<AnswerComment> optionalAnswerComment = answerCommentRepository.findById(answerCommentId);

        return optionalAnswerComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_COMMENT_NOT_FOUND));
    }

    public void deleteAnswerComment(long commentId, String token) {
        AnswerComment findAnswerComment = findVerifiedAnswerComment(commentId);
        long memberId = jwtTokenizer.getMemberId(token);
        if(findAnswerComment.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        answerCommentRepository.delete(findAnswerComment);
    }
}