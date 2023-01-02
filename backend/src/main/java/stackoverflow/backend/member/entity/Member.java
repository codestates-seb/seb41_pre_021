package stackoverflow.backend.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.answer.entity.Answer;
import stackoverflow.backend.common.BaseEntity;
import stackoverflow.backend.profileimage.entity.ProfileImage;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.vote.entity.Vote;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(unique = true, nullable = false, updatable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String username;

    private int reputation;

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Vote> votes = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToOne(mappedBy = "member",cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private ProfileImage profileImage;

    public Member(String email, String password, String username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }

    public Member(String email, String password, String username, int reputation) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.reputation = reputation;

    }
}