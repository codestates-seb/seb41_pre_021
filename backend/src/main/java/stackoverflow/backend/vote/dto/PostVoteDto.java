package stackoverflow.backend.vote.dto;

import lombok.Getter;
import lombok.Setter;
import stackoverflow.backend.vote.entity.Vote;

@Getter
@Setter
public class PostVoteDto {

    private long memberId;
    private Vote.VoteStatus voteStatus;
}
