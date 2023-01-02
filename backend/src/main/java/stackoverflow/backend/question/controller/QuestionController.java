package stackoverflow.backend.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.question.dto.QuestionPatchDto;
import stackoverflow.backend.question.dto.QuestionPostDto;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.mapper.QuestionMapper;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.response.MultipleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final JwtTokenizer jwtTokenizer;

    @PostMapping
    public ResponseEntity postQuestion(@RequestHeader(name = "Authorization") String token, @Valid @RequestBody QuestionPostDto questionPostDto) {

        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        List<String> tagNames = mapper.questionPostDtoToTags(questionPostDto);

        questionService.createQuestion(token, question, tagNames);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto,
                                        @RequestHeader(name = "Authorization") String token) {
        questionPatchDto.setQuestionId(questionId);
        List<String> tagNames = mapper.questionPatchDtoToTags(questionPatchDto);

        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto), tagNames,token);

        return new ResponseEntity<>(/*new SingleResponseDto<>(mapper.questionToQuestionDetailDto(question)),*/ HttpStatus.OK);
    }


    // 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId,
                                      @RequestHeader(value = "Authorization",required = false) String token) {
        Long viewerId = token != null ? jwtTokenizer.getMemberId(token) : null;
        Question question = questionService.findGetQuestion(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionDetailDto(question,viewerId), HttpStatus.OK);
    }


    // 전체 질문 조회
    @GetMapping  //
    public ResponseEntity getQuestions(@Positive @RequestParam(defaultValue = "1") Integer page,
                                       @Positive @RequestParam(defaultValue = "15") Integer size,
                                       @RequestParam(defaultValue = "Newest") String tab) {

        Page<Question> pagedQuestions = questionService.findQuestions(page - 1, size, tab);
        List<Question> questions = pagedQuestions.getContent();

        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.questionsToQuestionsResponseDto(questions), pagedQuestions),
                HttpStatus.OK);
    }


    // 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@RequestHeader(name = "Authorization") String token, @PathVariable("question-id") @Positive Long questionId) {
        questionService.deleteQuestion(token, questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}