package co.kr.rooom.service.domain.Room.leader;

import java.util.List;

public interface LeaderRepo extends MongoRepository<Leader, String> {
    List<Leader> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
