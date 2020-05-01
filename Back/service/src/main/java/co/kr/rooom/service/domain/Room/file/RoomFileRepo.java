package co.kr.rooom.service.domain.Room.file;

import java.util.List;

public interface RoomFileRepo extends MongoRepository<RoomFile, String> {
    List<RoomFile> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
