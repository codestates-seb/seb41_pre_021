package stackoverflow.backend.member.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.backend.member.dto.MemberPatchDto;
import stackoverflow.backend.member.dto.MemberPostDto;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.mapper.MemberMapper;
import stackoverflow.backend.member.repository.MemberRepository;
import stackoverflow.backend.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.stream.Collectors;

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
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity(memberResponseDto, HttpStatus.CREATED);

    }@PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId, @Valid @RequestBody MemberPatchDto memberPatchDto) {

        memberPatchDto.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity<>(memberResponseDto, HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {

        Member member = memberService.findMember(memberId);
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity(memberResponseDto, HttpStatus.OK);
    }
}
    //목록//
    /*@GetMapping
    public ResponseEntity getMembers(@RequestParam int page,
                                     @RequestParam int size) {

        Page<Member> result = memberService.findMembers(page-1, size);
        List<MemberDto.MemberForMyPage> lists = result.getContent().stream()
                .map(list -> mapper.memberToMemberForMyPage(list))
                .collect(Collectors.toList());


        return new ResponseEntity(new MultiResponseDto<>(lists, result),HttpStatus.OK);
    }*/






