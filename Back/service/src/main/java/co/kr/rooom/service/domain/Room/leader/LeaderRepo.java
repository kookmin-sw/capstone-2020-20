package co.kr.rooom.service.domain.Room.leader;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaderRepo extends JpaRepository<Leader, String> {
    List<Leader> findAllByConceptLikeAndStatementLike(String concept, String statement);
}
