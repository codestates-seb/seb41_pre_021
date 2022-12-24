package stackoverflow.backend.member.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class MemberResponseDto {

    private long memberId;

    private String username;

    private String email;

    private String password;

    private int reputation;


    }

