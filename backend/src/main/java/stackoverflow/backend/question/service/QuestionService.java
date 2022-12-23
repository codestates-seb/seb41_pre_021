package stackoverflow.backend.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.repository.MemberRepository;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.repository.QuestionRepository;


import java.util.Optional;


@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    private final MemberRepository memberRepository;


    public QuestionService(QuestionRepository questionRepository, MemberService memberService,
                           MemberRepository memberRepository) {
        this.questionRepository = questionRepository;
        this.MemberService = memberService;
        this.MemberRepository = memberRepository;

    }

  //게시글 생성
    public Question createQuestion(Question question) {
        Member member = MemberRepository.findByMemberId(question.getMember().getMemberId());
        question.setMember(member);

        return questionRepository.save(question);
    }

   //게시글 수정
    public Question updateQuestion(Question question) {
        Question findQuestion = questionRepository.findByQuestionId(question.getQuestionId());

        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }


    public Question findGetQuestion(Long questionId) {
        Question question = findVerifyQuestion(questionId);
        question.setViews(question.getViews() + 1);
        questionRepository.save(question);
        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    @Transactional(readOnly = true)
    private Question findVerifyQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }



    public void deleteQuestion(Long questionId) {
        Question question = findVerifyQuestion(questionId);
        questionRepository.delete(question);

    }