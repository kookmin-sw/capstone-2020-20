package co.kr.rooom.service.domain.User.authority;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// JpaRepository<Entity Class, Entity Class 에서 pk 역할을 하는 컬럼의 타입(@Id)>
public interface AuthorityRepo extends JpaRepository<Authority, String> {
    // 아래와 같이 jpa 에서 지원해주는 방법으로 sql query 를 커스텀 할 수 있습니다.
    // 하다가 모르겠으면 물어보세요
    List<Authority> findAllByConceptLikeAndStatementLike(String concept, String statement);
    Boolean existsAllByConceptAndStatement(String concept, String statement);
    Integer countByStatement(String statement);
}
