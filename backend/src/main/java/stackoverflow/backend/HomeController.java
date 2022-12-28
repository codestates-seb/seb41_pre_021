package stackoverflow.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.backend.question.dto.QuestionsResponseDto;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.question.mapper.QuestionMapper;
import stackoverflow.backend.question.service.QuestionService;

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

}
