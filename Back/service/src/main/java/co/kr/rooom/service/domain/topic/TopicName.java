package co.kr.rooom.service.domain.topic;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "name")

public class TopicName {
    @Column(nullable = false, length = 9)
    private String user;

    @Id
    @Column(length = 9)
    private String concept;

    @Column(nullable = false, length = 200)
    private String value;

    @Column(nullable = false, length = 1)
    private String statement;

    @Column(nullable = false, length = 30)
    private String registered;

    @Builder
    public TopicName(String user, String concept, String value, String statement, String registered) {
        this.user = user;
        this.concept = concept;
        this.value = value;
        this.statement = statement;
        this.registered = registered;
    }
}
