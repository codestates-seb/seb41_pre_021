package stackoverflow.backend.questioncomment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.questioncomment.dto.QuestionCommentPatchDto;
import stackoverflow.backend.questioncomment.dto.QuestionCommentPostDto;
import stackoverflow.backend.questioncomment.dto.QuestionCommentResponseDto;
import stackoverflow.backend.questioncomment.entity.QuestionComment;
import stackoverflow.backend.questioncomment.mapper.QuestionCommentMapper;
import stackoverflow.backend.questioncomment.service.QuestionCommentService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequestMapping("/question-comments")
@RestController
@RequiredArgsConstructor
@Validated
public class QuestionCommentController {

    private final QuestionCommentService questionCommentService;
    private final QuestionCommentMapper mapper;

    @PostMapping
    public ResponseEntity postQuestionComment(@RequestBody @Valid QuestionCommentPostDto questionCommentPostDto,
                                              @RequestHeader("Authorization") String token) {

        QuestionComment questionComment = mapper.questionCommentPostDtoToQuestion(questionCommentPostDto);
        questionCommentService.createQuestionComment(questionComment,token);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity findQuestionComment(@PathVariable("comment-id") @Positive long commentId) {
        QuestionComment findComment = questionCommentService.findVerifiedQuestionComment(commentId);

        QuestionCommentResponseDto questionCommentResponseDto = mapper.questionToQuestionCommentResponseDto(findComment);

        return new ResponseEntity(questionCommentResponseDto,HttpStatus.OK);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchQuestionComment(@PathVariable("comment-id") @Positive long commentId,
                                               @RequestHeader(name = "Authorization") String token,
                                               @RequestBody @Valid QuestionCommentPatchDto questionCommentPatchDto) {

        questionCommentPatchDto.setQuestionCommentId(commentId);
        QuestionComment questionComment = mapper.questionCommentPatchDtoToQuestion(questionCommentPatchDto);
        QuestionComment result = questionCommentService.updateQuestionComment(questionComment, token);


        return new ResponseEntity(mapper.questionToQuestionCommentResponseDto(result),HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteQuestionComment(@PathVariable("comment-id") @Positive long commentId,
                                                @RequestHeader(name = "Authorization") String token) {
        questionCommentService.deleteQuestionComment(commentId,token);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
