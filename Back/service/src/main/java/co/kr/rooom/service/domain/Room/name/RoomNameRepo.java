package co.kr.rooom.service.domain.Room.name;

import java.util.List;

public interface RoomNameRepo extends MongoRepository<RoomName, String> {
    List<RoomName> findAllByConceptLikeAndStatementLike(String concept, String statement);
    boolean existsByConceptLikeAndStatementLike(String concept, String statement);
    // select * from room_name where concept like :1 and statement like :2
}
