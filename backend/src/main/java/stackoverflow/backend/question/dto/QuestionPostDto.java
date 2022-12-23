package stackoverflow.backend.question.dto;

import lombok.Getter;
import stackoverflow.backend.member.entity.Member;



import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Getter
public class QuestionPostDto {
    @Positive
    private Long memberId;
    @NotBlank(message = "제목을 작성하세요")
    @Size(min = 15, message = "최소 15자이상 작성하십시오")
    private String questionTitle;

    @NotBlank(message = "질문을 작성하세요.")
    @Size(min = 20, message = "최소 20자이상 작성하십시오")
    private String content;

    public Long getMemberId() {
        return memberId;
    }

    public String getQuestionTitle() {
        return questionTitle;
    }

    public String getContent() {
        return content;
    }

    public Member getMember(){
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }
}