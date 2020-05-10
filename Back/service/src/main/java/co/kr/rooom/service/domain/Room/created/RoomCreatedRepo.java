package co.kr.rooom.service.domain.Room.created;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomCreatedRepo extends JpaRepository<RoomCreated, String> {
    List<RoomCreated> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
