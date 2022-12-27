package stackoverflow.backend.vote.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.question.entity.Question;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "questionVote", columnNames = {"VOTER_ID","QUESTION_ID"}),
        @UniqueConstraint(name = "answerVote", columnNames = {"VOTER_ID","ANSWER_ID"})

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

    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @Enumerated(value = EnumType.STRING)
    private VoteStatus voteStatus = VoteStatus.NONE;

//    private int amount;

    public enum VoteStatus {
        UP(1),
        NONE(0),
        DOWN(-1);

        @Getter
        private int num;

        VoteStatus(int voteCnt) {
            this.num = voteCnt;
        }
    }
}
