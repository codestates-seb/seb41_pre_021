package stackoverflow.backend.member.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.dto.MemberPatchDto;
import stackoverflow.backend.member.dto.MemberPostDto;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.dto.MembersResponseDto;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.profileimage.entity.ProfileImage;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);


    default List<MembersResponseDto> membersToMembersResponseDto(List<Member> members) {
        List<MembersResponseDto> responseDto = members.stream()
                .map(member -> {
                    MembersResponseDto membersResponseDto = new MembersResponseDto();
                    membersResponseDto.setMemberId(member.getMemberId());
                    membersResponseDto.setUsername(member.getUsername());
                    membersResponseDto.setReputation(member.getReputation());

                    ProfileImage profileImage = member.getProfileImage();
                    String storeFileName = profileImage.getStoreFileName();
                    int pos = storeFileName.lastIndexOf(".");
                    String ext = storeFileName.substring(pos + 1);
                    try {
                        BufferedImage bImage = ImageIO.read(new File(storeFileName));
                        ByteArrayOutputStream bos = new ByteArrayOutputStream();

                        ImageIO.write(bImage, ext, bos);
                        byte[] data = bos.toByteArray();
                        membersResponseDto.setImage(Base64.getEncoder().encodeToString(data));
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    return membersResponseDto;
                }).collect(Collectors.toList());

        return responseDto;
    }

}