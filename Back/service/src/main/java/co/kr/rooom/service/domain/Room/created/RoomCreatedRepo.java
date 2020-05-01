package co.kr.rooom.service.domain.Room.created;

import java.util.List;

public interface RoomCreatedRepo extends MongoRepository<RoomCreated, String> {
    List<RoomCreated> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
