package co.kr.rooom.service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    // @Transactional annotation 을 꼭 써주셔야
    // jpa 사용이 가능합니다.
    @Transactional
    public String hiService(String username) {
        return "Hello World! " + username;
    }
}
