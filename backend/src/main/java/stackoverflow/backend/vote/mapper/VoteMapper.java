package stackoverflow.backend.vote.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.vote.dto.PostQuestionVoteDto;
import stackoverflow.backend.vote.entity.Vote;

@Mapper(componentModel = "spring")
public interface VoteMapper {

    default Vote postQuestionVoteDtoToVote(long questionId, PostQuestionVoteDto postQuestionVoteDto) {
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
}
