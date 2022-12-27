package stackoverflow.backend.answercomment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.answercomment.dto.AnswerCommentPatchDto;
import stackoverflow.backend.answercomment.dto.AnswerCommentPostDto;
import stackoverflow.backend.answercomment.dto.AnswerCommentResponseDto;
import stackoverflow.backend.answercomment.entity.AnswerComment;
import stackoverflow.backend.answercomment.mapper.AnswerCommentMapper;
import stackoverflow.backend.answercomment.service.AnswerCommentService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequestMapping("/answers/{answer-id}/answer-comments")
@RestController
@RequiredArgsConstructor
@Validated
public class AnswerCommentController {

    private final AnswerCommentService answerCommentService;
    private final AnswerCommentMapper mapper;

    @PostMapping
    public ResponseEntity postAnswerComment(@PathVariable("answer-id") @Positive long answerId,
                                              @RequestBody @Valid AnswerCommentPostDto answerCommentPostDto) {
        answerCommentPostDto.setAnswerId(answerId);
        AnswerComment answerComment = mapper.answerCommentPostDtoToAnswer(answerCommentPostDto);
        answerCommentService.createAnswerComment(answerComment);

        return new ResponseEntity(HttpStatus.CREATED);
    }
    @GetMapping("/{comment-id}")
    public ResponseEntity findAnswerComment(@PathVariable("answer-id") @Positive long answerId,
                                              @PathVariable("comment-id") @Positive long commentId) {
        AnswerComment findComment = answerCommentService.findVerifiedAnswerComment(commentId);

        AnswerCommentResponseDto answerCommentResponseDto = mapper.answerToAnswerCommentResponseDto(findComment);

        return new ResponseEntity(answerCommentResponseDto,HttpStatus.OK);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchanswerComment(@PathVariable("answer-id") @Positive long answerId,
                                               @PathVariable("comment-id") @Positive long commentId,
                                               @RequestHeader(name = "Authorization") String token,
                                               @RequestBody @Valid AnswerCommentPatchDto answerCommentPatchDto) {

        answerCommentPatchDto.setAnswerCommentId(commentId);
        AnswerComment answerComment = mapper.answerCommentPatchDtoToAnswer(answerCommentPatchDto);
        answerCommentService.updateAnswerComment(answerComment,token);

        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteAnswerComment(@PathVariable("answer-id") @Positive long answerId,
                                                @PathVariable("comment-id") @Positive long commentId,
                                                @RequestHeader(name = "Authorization") String token) {
        answerCommentService.deleteAnswerComment(commentId,token);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}