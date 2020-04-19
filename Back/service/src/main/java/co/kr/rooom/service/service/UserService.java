package co.kr.rooom.service.service;

import co.kr.rooom.service.config.JwtTokenProvider;
import co.kr.rooom.service.domain.User.authority.Authority;
import co.kr.rooom.service.domain.User.authority.AuthorityRepo;
import co.kr.rooom.service.domain.User.myRoom.MyRoomRepo;
import co.kr.rooom.service.domain.User.user.Name;
import co.kr.rooom.service.domain.User.user.NameRepo;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.HashMap;

@RequiredArgsConstructor
@Service
public class UserService {
    private final JwtTokenProvider jwtTokenProvider;
    private final NameRepo nameRepo;
    private final MyRoomRepo myRoomRepo;
    private final AuthorityRepo authorityRepo;

    // @Transactional annotation 을 꼭 써주셔야
    // jpa 사용이 가능합니다.
    @Transactional
    public String hiService(String username) {
        return "Hello World! " + username;
    }

    @Transactional
    public String getToken(String id, String name) {
        try {
            if (!nameRepo.existsByConceptAndStatement(id, "Y")) {
                nameRepo.save(Name.builder().user(id).concept(id).value(name).statement("Y").build());
                authorityRepo.save(Authority.builder().user(id).concept(id).value("user").statement("Y").build());
            }
            return jwtTokenProvider.createToken(id, Arrays.asList(""));
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }



    @Transactional
    public JSONObject loadInfo(String token, int page) {
        HashMap<String, Object> response = new HashMap<>();
        try {
            response.put("User_id", jwtTokenProvider.getUsername(token));
            Name name = nameRepo.findByConceptAndStatement(jwtTokenProvider.getUsername(token), "Y");
            response.put("User_name", name.getValue());
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", e.toString());
        }
        return new JSONObject(response);
    }
}