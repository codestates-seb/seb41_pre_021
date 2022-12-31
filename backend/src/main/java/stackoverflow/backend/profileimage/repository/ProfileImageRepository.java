package stackoverflow.backend.profileimage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.backend.profileimage.entity.ProfileImage;

import java.util.Optional;

public interface ProfileImageRepository extends JpaRepository<ProfileImage, Long> {

    Optional<ProfileImage> findByMember_MemberId(Long memberId);
}
