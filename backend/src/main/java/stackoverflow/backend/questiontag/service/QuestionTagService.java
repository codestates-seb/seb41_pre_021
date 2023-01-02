package stackoverflow.backend.questiontag.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.questiontag.entity.QuestionTag;
import stackoverflow.backend.questiontag.repository.QuestionTagRepository;
import stackoverflow.backend.tag.entity.Tag;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionTagService {

    private final QuestionTagRepository questionTagRepository;

    public void createQuestionTagWithQuestion(List<Tag> tagList, Question question) {
        tagList.stream().forEach(tag -> {
            QuestionTag questionTag = new QuestionTag();
            questionTag.setQuestion(question);
            questionTag.setTag(tag);

            questionTagRepository.save(questionTag);
        });
    }

    public void deleteAllQuestionTag(long questionId) {
        questionTagRepository.deleteAllByQuestionId(questionId);
    }
}
