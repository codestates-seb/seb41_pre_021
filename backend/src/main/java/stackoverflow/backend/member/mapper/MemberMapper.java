package stackoverflow.backend.member.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.dto.MemberPatchDto;
import stackoverflow.backend.member.dto.MemberPostDto;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.dto.MembersResponseDto;
import stackoverflow.backend.member.entity.Member;

import java.util.List;



@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    List<MembersResponseDto> membersToMembersResponseDto(List<Member> members);
}