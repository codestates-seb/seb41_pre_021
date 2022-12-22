package stackoverflow.backend.member.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPatchDto {

    private long memberId;

    private String userName;

    private String password;

}