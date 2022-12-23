package stackoverflow.backend.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MemberResponseDto {

    private long memberId;

    private String username;

    private String email;

    private String password;

    private int reputation;
}

