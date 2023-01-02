package stackoverflow.backend.vote.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.vote.dto.PostVoteDto;
import stackoverflow.backend.vote.entity.Vote;
import stackoverflow.backend.vote.mapper.VoteMapper;
import stackoverflow.backend.vote.service.VoteService;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class VoteController {

    private final VoteMapper mapper;
    private final VoteService voteService;

    @PostMapping("/questions/votes/{question-id}")
    public ResponseEntity postVoteQuestion(@PathVariable("question-id") long questionId,
                                           @RequestBody PostVoteDto postVoteDto,
                                           @RequestHeader("Authorization") String token) {
        Vote vote = mapper.postQuestionVoteDtoToVote(questionId, postVoteDto);

        voteService.postQuestionVote(token,vote);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/answers/votes/{answer-id}")
    public ResponseEntity postVoteAnswer(@PathVariable("answer-id") long answerId,
                                         @RequestBody PostVoteDto postVoteDto,
                                         @RequestHeader("Authorization") String token) {
        Vote vote = mapper.postAnswerVoteDtoToVote(answerId, postVoteDto);
        voteService.postAnswerVote(token,vote);

        return new ResponseEntity(HttpStatus.OK);
    }
}
