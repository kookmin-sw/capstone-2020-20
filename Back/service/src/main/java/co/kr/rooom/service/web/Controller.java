package co.kr.rooom.service.web;

import co.kr.rooom.service.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/**")
public class Controller {
    @Autowired
    private final UserService service;

    // PathVariable 의 경우
    // http://localhost:8080/wlgnssla311 의 형식으로 오는 url 을 받습니다.
    @GetMapping("/{username}")
    public String sayHi(@PathVariable(name = "username") String username) {
        return service.hiService(username);
    }

    // RequestParam 의 경우
    // http://localhost:8080/myname?username=wlgnssla311 의 형식으로 오는 url 을 받습니다.
    @GetMapping("/myname")
    public String requestParam(@RequestParam(name = "username") String username) {
        return service.hiService(username);
    }

    // @PostMapping, @DeleteMapping, @PutMapping 등 http method 에 맞는
    // annotation 을 걸어놓으시면 됩니다.
}
