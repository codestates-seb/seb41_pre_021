package stackoverflow.backend.vote.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.vote.dto.PostQuestionVoteDto;
import stackoverflow.backend.vote.entity.Vote;
import stackoverflow.backend.vote.mapper.VoteMapper;
import stackoverflow.backend.vote.service.VoteService;

@RestController
@RequestMapping("/questions/votes")
@RequiredArgsConstructor
public class VoteController {

    private final VoteMapper mapper;
    private final VoteService voteService;

    @PostMapping("/{question-id}")
    public ResponseEntity postVoteQuestion(@PathVariable("question-id") long questionId,
                                           @RequestBody PostQuestionVoteDto postQuestionVoteDto,
                                           @RequestHeader("Authorization") String token) {
        Vote vote = mapper.postQuestionVoteDtoToVote(questionId, postQuestionVoteDto);

        voteService.postQuestionVote(token,vote);

        return new ResponseEntity(HttpStatus.OK);
    }
}
