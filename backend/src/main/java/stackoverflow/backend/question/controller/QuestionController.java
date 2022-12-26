package stackoverflow.backend.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.member.mapper.MemberMapper;
import stackoverflow.backend.question.dto.QuestionPatchDto;
import stackoverflow.backend.question.dto.QuestionPostDto;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.mapper.QuestionMapper;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.response.MultipleResponseDto;
import stackoverflow.backend.response.SingleResponseDto;



import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final MemberMapper memberMapper;

    // 질문 등록
    @PostMapping
    public ResponseEntity postQuestion(Principal principal, @Valid @RequestBody QuestionPostDto questionPostDto) {

        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        List<String> tagNames = mapper.questionPostDtoToTags(questionPostDto);

        questionService.createQuestion(principal.getName(),question,tagNames);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/{question-id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        List<String> tagNames = mapper.questionPatchDtoToTags(questionPatchDto);

        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto),tagNames);

//        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionDetailDto(question)), HttpStatus.OK);
    }



    // 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId) {

        Question question = questionService.findGetQuestion(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionDetailDto(question), HttpStatus.OK);
    }


    // 전체 질문 조회
    @GetMapping  //
    public ResponseEntity getQuestions(@Positive @RequestParam(defaultValue = "1") Integer page,
                                       @Positive @RequestParam(defaultValue = "15") Integer size,
                                       @RequestParam(defaultValue = "Newest") String tab) {

        Page<Question> pagedQuestions = questionService.findQuestions(page-1, size,tab);
        List<Question> questions = pagedQuestions.getContent();

//        List<QuestionResponseDto> response =
//                questions.stream()
//                        .map(question -> mapper.questionToQuestionResponse(memberMapper, question))
//                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.questionsToQuestionsResponseDto(questions),pagedQuestions),
                HttpStatus.OK);
    }



    // 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}