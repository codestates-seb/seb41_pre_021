package stackoverflow.backend.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.common.BaseEntity;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.vote.entity.Vote;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Column(nullable = false, length = 100)
    private String questionTitle;

    @Column(columnDefinition = "TEXT")
    private String content;
    private int views;

    private boolean isAdopted;

    @Column(updatable = false)
    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime modifiedAt;
}


/*    @OneToMany(mappedBy = "question")
    private List<Vote> votes = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
    }



}

        */