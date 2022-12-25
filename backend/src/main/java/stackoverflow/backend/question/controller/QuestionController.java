package stackoverflow.backend.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.member.mapper.MemberMapper;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.question.dto.QuestionPatchDto;
import stackoverflow.backend.question.dto.QuestionPostDto;
import stackoverflow.backend.question.dto.QuestionResponseDto;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.mapper.QuestionMapper;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.response.MultipleResponseDto;
import stackoverflow.backend.response.SingleResponseDto;
import stackoverflow.backend.tag.entity.Tag;


import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

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
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto requestBody) {
        requestBody.setQuestionId(questionId);

        Question question =
                questionService.updateQuestion(mapper.questionPatchDtoToQuestion(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }



    // 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId) {

        Question question = questionService.findGetQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(memberMapper, question)),
                HttpStatus.OK);
    }


    // 전체 질문 조회
    @GetMapping  //
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionResponseDto> response =
                questions.stream()
                        .map(question -> mapper.questionToQuestionResponse(memberMapper, question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.questionsToQuestionResponses(questions),pageQuestions),
                HttpStatus.OK);
    }



    // 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}