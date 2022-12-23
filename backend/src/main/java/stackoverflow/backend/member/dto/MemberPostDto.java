package stackoverflow.backend.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class MemberPostDto {

    @NotBlank(message = "이름은 공백을 허용하지 않습니다")
    private String username;

    @Email
    @NotBlank(message = "이메일은 공백을 허용하지 않습니다")
    private String email;

    @NotBlank(message = "비밀번호는 공백을 허용하지 않습니다")
    private String password;
}