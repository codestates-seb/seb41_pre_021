package stackoverflow.backend.question.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.repository.MemberRepository;
import stackoverflow.backend.question.repository.QuestionRepository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.util.List;

@SpringBootTest
class QuestionTest {

    @Autowired
    QuestionRepository questionRepository;
    @Autowired MemberRepository memberRepository;

    @Test
    void createQuestion() {
        Member member = new Member("asdf@dd.com", "1111", "hgd", 150);
        memberRepository.save(member);

        Question question = new Question("title", "content", 0);
//        question.addMember(member);
        questionRepository.save(question);
    }
}