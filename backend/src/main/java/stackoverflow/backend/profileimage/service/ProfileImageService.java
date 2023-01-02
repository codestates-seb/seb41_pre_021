package stackoverflow.backend.profileimage.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import stackoverflow.backend.auth.jwt.JwtTokenizer;
import stackoverflow.backend.exception.BusinessLogicException;
import stackoverflow.backend.exception.ExceptionCode;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.member.service.MemberService;
import stackoverflow.backend.profileimage.entity.ProfileImage;
import stackoverflow.backend.profileimage.repository.ProfileImageRepository;

import java.io.File;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class ProfileImageService {

    private final ProfileImageRepository profileImageRepository;
    private final MemberService memberService;

    private final JwtTokenizer jwtTokenizer;
    @Value("${file.dir}")
    private String fileDir;

    public String getFullPath(String filename) {
        return fileDir + filename;
    }

    public ProfileImage createImage(MultipartFile file, long memberId, String token) throws IOException {

        if(memberId != jwtTokenizer.getMemberId(token)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
        }

        ProfileImage profileImage = findVerifiedProfileImageByMemberId(memberId);

        Member findMember = memberService.findVerifiedMember(memberId);
        profileImage.setMember(findMember);

        String originalFilename = file.getOriginalFilename();
        String storeFileName = createStoreFileName(originalFilename);

        file.transferTo(new File(getFullPath(storeFileName)));

        profileImage.setStoreFileName(getFullPath(storeFileName));
        profileImage.setUploadFileName(originalFilename);

        return profileImageRepository.save(profileImage);
    }


    private String createStoreFileName(String originalFilename) {
        String uuid = UUID.randomUUID().toString();
        String ext = extractExt(originalFilename);

        return uuid + "." + ext;
    }

    private String extractExt(String originalFilename) {
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }

    public ProfileImage findVerifiedProfileImageByMemberId(long memberId) {
        Optional<ProfileImage> optionalProfileImage = profileImageRepository.findByMember_MemberId(memberId);

        return optionalProfileImage.orElse(new ProfileImage());
    }
}
