package co.kr.rooom.service.domain.Room.colorCode;

import java.util.List;

public interface RoomColorRepo extends MongoRepository<RoomColor, String> {
    List<RoomColor> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
