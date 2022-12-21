package stackoverflow.backend.member.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.common.BaseEntity;
import stackoverflow.backend.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    private String email;
    private String password;
    private String userName;
    private int reputation;

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    public Member(String email, String password, String userName, int reputation) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.reputation = reputation;
    }
}
