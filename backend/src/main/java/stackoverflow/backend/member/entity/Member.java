package stackoverflow.backend.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.common.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends BaseEntity {

    @Id @GeneratedValue
    private long memberId;

    private String email;
    private String password;
    private String userName;
    private int reputation;

    public Member(String email, String password, String userName, int reputation) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.reputation = reputation;
    }
}
