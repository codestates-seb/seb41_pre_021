package stackoverflow.backend.questioncomment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.questioncomment.entity.QuestionComment;
import stackoverflow.backend.questioncomment.repository.QuestionCommentRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionCommentService {

    private final QuestionCommentRepository questionCommentRepository;
    private final QuestionService questionService;
    private final MemberService memberService;

    public QuestionComment createQuestionComment(QuestionComment questionComment) {
        Question question = questionService.findVerifyQuestion(questionComment.getQuestion().getQuestionId());
        Member member = memberService.findVerifiedMember(questionComment.getMember().getMemberId());

        questionComment.setMember(member);
        questionComment.setQuestion(question);
        return questionCommentRepository.save(questionComment);
    }
}
