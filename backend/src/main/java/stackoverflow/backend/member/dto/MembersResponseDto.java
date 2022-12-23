package stackoverflow.backend.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MembersResponseDto {

    private long memberId;
    private String username;
    private int reputation;
}
