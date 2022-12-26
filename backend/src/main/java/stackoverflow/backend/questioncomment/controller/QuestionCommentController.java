package stackoverflow.backend.questioncomment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.questioncomment.dto.QuestionCommentPostDto;
import stackoverflow.backend.questioncomment.entity.QuestionComment;
import stackoverflow.backend.questioncomment.mapper.QuestionCommentMapper;
import stackoverflow.backend.questioncomment.service.QuestionCommentService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequestMapping("/questions/{question-id}/question-comments")
@RestController
@RequiredArgsConstructor
@Validated
public class QuestionCommentController {

    private final QuestionCommentService questionCommentService;
    private final QuestionCommentMapper mapper;

    @PostMapping
    public ResponseEntity postQuestionComment(@PathVariable("question-id") @Positive long questionId,
                                              @RequestBody @Valid QuestionCommentPostDto questionCommentPostDto) {
        questionCommentPostDto.setQuestionId(questionId);
        QuestionComment questionComment = mapper.questionCommentPostDtoToQuestion(questionCommentPostDto);
        questionCommentService.createQuestionComment(questionComment);

        return new ResponseEntity(HttpStatus.CREATED);
    }

}
