package co.kr.rooom.service.domain.User.myRoom;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MyRoomRepo extends JpaRepository<MyRoom, String> {
    List<MyRoom> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
