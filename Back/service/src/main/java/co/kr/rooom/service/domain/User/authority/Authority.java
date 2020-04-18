package co.kr.rooom.service.domain.User.authority;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

// 기본적으로
// column 을 ORM Mapping 하실때 underscore(_)를 쓰시면 안됩니다.
// jpa 에서 _를 특별한 스트링으로 인식해서 따로 잡아줘야 하니 좀 귀찮아집니다.
// 빨간줄 그어져도 위에 탭에 빨간줄 안그어져있으면 에러 아니니 신경쓰지마세요.
// ddl-auto=none 이라 빨간줄 그어져있는겁니다.

@Getter
@NoArgsConstructor
@Entity
@Table(name = "user_authority")
public class Authority {
    // mysql 설정을 이와 같이 잡아줄 수 있습니다
    // length 는 말 그대로 Varchar(60)같이 값이 들어갈 수 있는
    // 허용 범위를 정해주는 겁니다.
    // length 나 nullable 은 테이블 설정에 맞게 꼭 수정하세요
    // 안그럼 에러납니다
    @Column(nullable = false, length = 60)
    private String user;

    @Id
    @Column(length = 60)
    private String concept;

    @Column(nullable = false, length = 255)
    private String value;

    @Column(nullable = false, length = 1)
    private String statement;

    @Column(nullable = false, length = 20)
    private String registered;

    @Builder
    public Authority(String user, String concept, String value, String statement, String registered) {
        this.user = user;
        this.concept = concept;
        this.value = value;
        this.statement = statement;
        this.registered = registered;
    }
}
