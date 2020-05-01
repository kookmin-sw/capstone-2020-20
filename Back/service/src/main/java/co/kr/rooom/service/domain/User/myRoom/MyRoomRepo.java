package co.kr.rooom.service.domain.User.myRoom;


import java.util.List;

public interface MyRoomRepo extends MongoRepository<MyRoom, String> {
    List<MyRoom> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
