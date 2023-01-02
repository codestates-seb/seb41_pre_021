package stackoverflow.backend.vote.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.answer.service.AnswerService;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.vote.entity.Vote;
import stackoverflow.backend.vote.repository.VoteRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class VoteService {

    private final JwtTokenizer jwtTokenizer;
    private final QuestionService questionService;
    private final AnswerService answerService;
    private final MemberService memberService;
    private final VoteRepository voteRepository;

    public Vote postQuestionVote(String token,Vote vote) {

        if(jwtTokenizer.getMemberId(token) != vote.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }
        Member member = memberService.findVerifiedMember(vote.getMember().getMemberId());
        Question question = questionService.findVerifyQuestion(vote.getQuestion().getQuestionId());
        vote.setMember(member);
        vote.setQuestion(question);

        Optional<Vote> optionalVote = voteRepository.findByQuestionAndMember(question, member);
        if(optionalVote.isPresent()) {
            Vote findVote = optionalVote.get();
            findVote.setVoteStatus(vote.getVoteStatus());
            return findVote;
        }

        return voteRepository.save(vote);
    }


    public Vote postAnswerVote(String token,Vote vote) {

        if(jwtTokenizer.getMemberId(token) != vote.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }
        Member member = memberService.findVerifiedMember(vote.getMember().getMemberId());
        Answer answer = answerService.findVerifiedAnswer(vote.getAnswer().getAnswerId());
        vote.setMember(member);
        vote.setAnswer(answer);

        Optional<Vote> optionalVote = voteRepository.findByAnswerAndMember(answer, member);
        if(optionalVote.isPresent()) {
            Vote findVote = optionalVote.get();
            findVote.setVoteStatus(vote.getVoteStatus());
            return findVote;
        }

        return voteRepository.save(vote);
    }
}
