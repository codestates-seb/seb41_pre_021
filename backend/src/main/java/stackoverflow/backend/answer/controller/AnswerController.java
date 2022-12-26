package stackoverflow.backend.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.answer.dto.AnswerPatchDto;
import stackoverflow.backend.answer.dto.AnswerPostDto;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.answer.mapper.AnswerMapper;
import stackoverflow.backend.answer.service.AnswerService;
import stackoverflow.backend.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/answer")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    //답변 생성
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto requestBody) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.CREATED);
    }
    //답변 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getAnswers(@PathVariable("question-id") Long questionId){
        List<Answer> answers = answerService.findAnswers(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answersToAnswersResponseDto(answers)), HttpStatus.OK);
    }

    //답변 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }
    //답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}