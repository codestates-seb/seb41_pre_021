package stackoverflow.backend.member.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.member.dto.MemberPatchDto;
import stackoverflow.backend.member.dto.MemberPostDto;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.mapper.MemberMapper;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.response.MultipleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

   //회원가입//

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {

        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));

            return new ResponseEntity(HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto,
                                      @RequestHeader(value = "Authorization") String token) {

        memberPatchDto.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto),token);
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity<>(memberResponseDto, HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {

        Member member = memberService.findMember(memberId);
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity(memberResponseDto, HttpStatus.OK);
    }

    //회원 목록
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam(defaultValue = "1") Integer page,
                                     @Positive @RequestParam(defaultValue = "15") Integer size,
                                     @RequestParam(defaultValue = "newusers") String tab) {
        Page<Member> pagedMembers = memberService.findMemberList(page - 1, size,tab);
        List<Member> members = pagedMembers.getContent();
        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.membersToMembersResponseDto(members), pagedMembers), HttpStatus.OK);
    }
}




