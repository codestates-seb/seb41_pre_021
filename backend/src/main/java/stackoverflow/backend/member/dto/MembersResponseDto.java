package stackoverflow.backend.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MembersResponseDto {

    private long memberId;

    private String username;
    private int reputation;
    private String image;

}
