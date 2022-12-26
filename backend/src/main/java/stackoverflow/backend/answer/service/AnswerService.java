package stackoverflow.backend.answer.service;


import org.springframework.stereotype.Service;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.answer.repository.AnswerRepository;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.repository.MemberRepository;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.repository.QuestionRepository;
import stackoverflow.backend.question.service.QuestionService;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, MemberService memberService, QuestionRepository questionRepository, MemberRepository memberRepository) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.memberService = memberService;
        this.questionRepository = questionRepository;
        this.memberRepository = memberRepository;
    }

    public Answer createAnswer(Answer answer) {

        Question question = questionRepository.findByQuestionId(answer.getQuestion().getQuestionId());
        Member member = memberRepository.findByMemberId(answer.getMember().getMemberId());

        answer.setQuestion(question);
        answer.setMember(member);


        return answerRepository.save(answer);
    }

    public void verifyExistsQuestionIdAndMemberId(Answer answer) {
        questionService.findVerifyQuestion(answer.getQuestion().getQuestionId());
        memberService.findVerifiedMember(answer.getMember().getMemberId());
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent()).ifPresent(findAnswer::setContent);


        return answerRepository.save(answer);
    }
    public void deleteAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);
    }

    public List<Answer> findAnswers(Long questionId) {
        Question question = questionRepository.findByQuestionId(questionId);
        return answerRepository.findAllByQuestion(question);
    }
    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

}