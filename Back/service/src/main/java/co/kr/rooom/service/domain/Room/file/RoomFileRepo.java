package co.kr.rooom.service.domain.Room.file;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomFileRepo extends JpaRepository<RoomFile, String> {
    List<RoomFile> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
