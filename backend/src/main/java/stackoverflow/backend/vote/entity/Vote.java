package stackoverflow.backend.vote.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "questionVote", columnNames = {"VOTER_ID","QUESTION_ID"})
})
public class Vote {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "VOTER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    private int amount;
}
