package co.kr.rooom.service.domain.Room.name;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomNameRepo extends JpaRepository<RoomName, String> {
    List<RoomName> findAllByConceptLikeAndStatementLike(String concept, String statement);
    boolean existsByConceptLikeAndStatementLike(String concept, String statement);
    // select * from room_name where concept like :1 and statement like :2
}
