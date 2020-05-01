package co.kr.rooom.service.domain.Room.topic;

import java.util.List;

public interface TopicRepo extends MongoRepository<Topic, String> {
    List<Topic> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
