package stackoverflow.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.backend.question.dto.QuestionsResponseDto;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.mapper.QuestionMapper;
import stackoverflow.backend.question.service.QuestionService;
import stackoverflow.backend.response.MultipleResponseDto;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class HomeController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @GetMapping
    public ResponseEntity home() {
        List<Question> homeQuestions = questionService.findHomeQuestions();

        List<QuestionsResponseDto> questionsResponseDtos = mapper.questionsToQuestionsResponseDto(homeQuestions);

        return new ResponseEntity(questionsResponseDtos, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity search(@Positive @RequestParam(defaultValue = "1") Integer page,
                                 @Positive @RequestParam(defaultValue = "15") Integer size,
                                 @RequestParam(value = "q") String keyword) {
        Page<Question> pagedSearchResult = questionService.findQuestionsWithKeyword(page - 1, size, keyword);

        List<Question> questions = pagedSearchResult.getContent();

        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.questionsToQuestionsResponseDto(questions), pagedSearchResult), HttpStatus.OK);

    }

}
