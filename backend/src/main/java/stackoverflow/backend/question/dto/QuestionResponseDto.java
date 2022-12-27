package stackoverflow.backend.question.dto;

import lombok.Getter;
import lombok.Setter;
import stackoverflow.backend.member.dto.MemberResponseDto;

import java.time.LocalDateTime;

//@Getter
//@Setter
//public class QuestionResponseDto {
//
//    private long questionId;
//    private String questionTitle;
//    private String content;
//
//    private String username;
//    private Long memberId;
//    private int views;
//    private boolean isAdopted;
//    private LocalDateTime createdAt;
//    private LocalDateTime modifiedAt;
//
//    public void setMember(MemberResponseDto memberToMemberResponseDto) {
//        this.username = memberToMemberResponseDto.getUsername();
//        this.memberId = memberToMemberResponseDto.getMemberId();
//    }
//
//
//}