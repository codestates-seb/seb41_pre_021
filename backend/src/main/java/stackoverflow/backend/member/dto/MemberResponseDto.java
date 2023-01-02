package stackoverflow.backend.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class MemberResponseDto {

    private long memberId;

    private String username;

    private String email;

    private int reputation;
}

