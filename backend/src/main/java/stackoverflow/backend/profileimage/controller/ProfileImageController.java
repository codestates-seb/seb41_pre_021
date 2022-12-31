package stackoverflow.backend.profileimage.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import stackoverflow.backend.profileimage.entity.ProfileImage;
import stackoverflow.backend.profileimage.service.ProfileImageService;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/profiles")
public class ProfileImageController {

    private final ProfileImageService profileImageService;

    @PostMapping
    public ResponseEntity postImage(@RequestParam MultipartFile file, @RequestParam long memberId) throws IOException {

        ProfileImage image = profileImageService.createImage(file, memberId);

        return new ResponseEntity(image.getStoreFileName(), HttpStatus.OK);

    }
}
