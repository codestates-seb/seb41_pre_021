package stackoverflow.backend.vote.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.vote.dto.PostVoteDto;
import stackoverflow.backend.vote.entity.Vote;

@Mapper(componentModel = "spring")
public interface VoteMapper {

    default Vote postQuestionVoteDtoToVote(long questionId, PostVoteDto postQuestionVoteDto) {
        Vote vote = new Vote();
        Member member = new Member();
        member.setMemberId(postQuestionVoteDto.getMemberId());
        Question question = new Question();
        question.setQuestionId(questionId);

        vote.setQuestion(question);
        vote.setMember(member);
        vote.setVoteStatus(postQuestionVoteDto.getVoteStatus());
        return vote;
    }

    default Vote postAnswerVoteDtoToVote(long answerId, PostVoteDto postAnswerVoteDto) {
        Vote vote = new Vote();
        Member member = new Member();
        member.setMemberId(postAnswerVoteDto.getMemberId());
        Answer answer = new Answer();
        answer.setAnswerId(answerId);

        vote.setAnswer(answer);
        vote.setMember(member);
        vote.setVoteStatus(postAnswerVoteDto.getVoteStatus());
        return vote;
    }
}
