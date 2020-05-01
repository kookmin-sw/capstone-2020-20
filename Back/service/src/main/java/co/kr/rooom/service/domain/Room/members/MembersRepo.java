package co.kr.rooom.service.domain.Room.members;

import java.util.List;

public interface MembersRepo extends MongoRepository<Members, String> {
    List<Members> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
