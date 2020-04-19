package co.kr.rooom.service.domain.Room.colorCode;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomColorRepo extends JpaRepository<RoomColor, String> {
    List<RoomColor> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
