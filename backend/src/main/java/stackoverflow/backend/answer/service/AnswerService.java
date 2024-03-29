package stackoverflow.backend.answer.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.answer.repository.AnswerRepository;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.service.QuestionService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;
    private final QuestionService questionService;


    public Answer createAnswer(String token, Answer answer) {
        long memberId = jwtTokenizer.getMemberId(token);
        if(answer.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }
        Question question = questionService.findVerifyQuestion(answer.getQuestion().getQuestionId());
        Member findMember = memberService.findVerifiedMember(memberId);
        findMember.setReputation(findMember.getReputation() + 1);
        answer.setMember(findMember);
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(String token, Answer answer) {
        long memberId = jwtTokenizer.getMemberId(token);

        if(answer.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
//        Optional.ofNullable(answer.getContent()).ifPresent(findAnswer::setContent);
        findAnswer.setContent(answer.getContent());
        return findAnswer;
    }


    public void deleteAnswer(String token, long answerId) {
        long memberId = jwtTokenizer.getMemberId(token);
        Answer answer = findVerifiedAnswer(answerId);
        if(answer.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        answerRepository.delete(answer);
    }


    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    public Answer adoptAnswer(long answerId, long memberId,String token) {
        long tokenMemberId = jwtTokenizer.getMemberId(token);
        if(tokenMemberId != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }
        Answer findAnswer = findVerifiedAnswer(answerId);

        Question question = findAnswer.getQuestion();

        if(question.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        List<Answer> answers = question.getAnswers();
        for (Answer answer : answers) {
            if(answer.isAccepted()) {
                throw new BusinessLogicException(ExceptionCode.ANSWER_ALREADY_ADOPTED);
            }
        }

        findAnswer.setAccepted(true);
        question.setAdopted(true);
        findAnswer.setQuestion(question);
        return findAnswer;
    }

}