package co.kr.rooom.service.domain.User.user;


import java.util.List;

// JpaRepository<Entity Class, Entity Class 에서 pk 역할을 하는 컬럼의 타입(@Id)>
public interface NameRepo extends MongoRepository<Name, String> {
    // 아래와 같이 jpa 에서 지원해주는 방법으로 sql query 를 커스텀 할 수 있습니다.
    // 하다가 모르겠으면 물어보세요
    List<Name> findAllByConceptLikeAndStatementLike(String concept, String statement);
    Boolean existsByConceptAndStatement(String concept, String statement);
    Name findByConceptAndStatement(String concept, String statement);
    Integer countByStatement(String statement);
}
