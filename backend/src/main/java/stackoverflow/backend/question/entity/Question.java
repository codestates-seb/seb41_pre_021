package stackoverflow.backend.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.common.BaseEntity;
import stackoverflow.backend.member.entity.Member;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question extends BaseEntity {

    public Question(String questionTitle, String content, int views) {
        this.questionTitle = questionTitle;
        this.content = content;
        this.views = views;
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    private String questionTitle;
    private String content;
    private int views;

    public void addMember(Member member) {
        this.member = member;
        member.getQuestions().add(this);
    }




}
