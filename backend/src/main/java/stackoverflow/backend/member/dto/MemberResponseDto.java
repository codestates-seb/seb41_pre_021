package stackoverflow.backend.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class MemberResponseDto {

        private long memberId;

        private String userName;

        private String email;

        private String password;

      //  private LocalDateTime createdAt;

      //  private LocalDateTime modifiedAt;

    }

