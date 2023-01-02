package stackoverflow.backend.answer.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.answercomment.entity.AnswerComment;
import stackoverflow.backend.common.BaseEntity;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.vote.entity.Vote;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Column(columnDefinition = "TEXT")
    private String content;
    private boolean accepted;

    @OneToMany(mappedBy = "answer", cascade = CascadeType.REMOVE)
    private List<Vote> votes = new ArrayList<>();

    @OneToMany(mappedBy = "answer", cascade = CascadeType.REMOVE)
    private List<AnswerComment> answerComments = new ArrayList<>();

}