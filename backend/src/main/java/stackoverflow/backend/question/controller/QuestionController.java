package stackoverflow.backend.question.controller;

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


import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/question")
@Validated
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final MemberService memberService;
    private final MemberMapper memberMapper;


    public QuestionController(QuestionService questionService, QuestionMapper mapper, MemberService memberService, MemberMapper memberMapper) {
        this.questionService = questionService;
        this.mapper = mapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;

    }

    // 질문 등록
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {

        Question question = questionService.createQuestion(mapper.questionPostToQuestion(memberService, questionPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(memberMapper, question))
                , HttpStatus.CREATED);
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



    // 게시글 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId) {

        Question question = questionService.findGetQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(memberMapper, question)),
                HttpStatus.OK);
    }


    // 전체 게시글 조회
    @GetMapping  // page = 1, size = 10으로 설정해 주세요!
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



    // 게시글 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}