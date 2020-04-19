package co.kr.rooom.service.domain.Room.explanation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExplanationRepo extends JpaRepository<Explanation, String> {
    List<Explanation> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
