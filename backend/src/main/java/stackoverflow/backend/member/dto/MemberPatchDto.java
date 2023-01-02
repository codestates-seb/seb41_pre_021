package stackoverflow.backend.member.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPatchDto {

    private long memberId;

    private String username;

    private String password;

}