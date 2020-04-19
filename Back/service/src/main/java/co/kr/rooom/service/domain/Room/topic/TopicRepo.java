package co.kr.rooom.service.domain.Room.topic;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopicRepo extends JpaRepository<Topic, String> {
    List<Topic> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
