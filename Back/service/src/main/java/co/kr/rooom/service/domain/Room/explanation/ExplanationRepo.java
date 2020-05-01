package co.kr.rooom.service.domain.Room.explanation;

import java.util.List;

public interface ExplanationRepo extends MongoRepository<Explanation, String> {
    List<Explanation> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
