package co.kr.rooom.service.domain.Room.members;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MembersRepo extends JpaRepository<Members, String> {
    List<Members> findAllByConceptLikeAndStatementLike(String concept, String statement);
    int countByConceptLikeAndStatement(String concept, String statement);
}
