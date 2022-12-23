package stackoverflow.backend;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.backend.member.entity.Member;

@RequestMapping("/")
@RestController
public class TestController {

    @GetMapping
    public ResponseEntity testController() {
        return new ResponseEntity(new TestClass("test@email.com","username"), HttpStatus.OK);
    }

    @AllArgsConstructor
    @Getter
    static class TestClass {
        private String email;
        private String username;
    }
}
