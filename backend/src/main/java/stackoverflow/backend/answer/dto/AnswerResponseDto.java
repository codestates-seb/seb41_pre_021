package stackoverflow.backend.answer.dto;

import lombok.Getter;
import lombok.Setter;
import stackoverflow.backend.member.dto.MemberResponseDto;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private long memberId;
    private MemberResponseDto member;
    private String content;
    private long questionId;
    private boolean accepted;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private String username;

    public void setMember(MemberResponseDto memberToMemberResponseDto) {
        this.username = memberToMemberResponseDto.getUsername();
        this.memberId = memberToMemberResponseDto.getMemberId();
    }
}