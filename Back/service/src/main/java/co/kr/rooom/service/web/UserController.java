package co.kr.rooom.service.web;

import co.kr.rooom.service.service.UserService;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.NotNull;

// @Nullable => springframework의 라이브러리 사용
@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService service;

    @PostMapping("/token")
    public String getToken(@NotNull String User_id, @NotNull String User_name) {
        System.out.println("User_id : " + User_id + " \\ User_name : " + User_name);
        return service.getToken(User_id, User_name);
    }

    @GetMapping("/load")
    public JSONObject infoLoad(HttpServletRequest header, @RequestParam(name = "page") int page) {
        System.out.println(header.getHeader("Authorization").substring(7) + " // page : " + page);
        return new JSONObject();
    }
}