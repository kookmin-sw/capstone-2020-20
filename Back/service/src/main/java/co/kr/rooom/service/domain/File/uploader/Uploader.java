package co.kr.rooom.service.domain.File.uploader;

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
@Table(name = "file_uploader")
public class Uploader {
    @Column(nullable = false, length = 9)
    private String user;

    @Id
    @Column(length = 50)
    private String concept;

    @Column(nullable = false, length = 9)
    private String value;

    @Column(nullable = false, length = 1)
    private String statement;

    @Column(nullable = false, length = 30)
    private String registered;

    @Builder
    public Uploader(String user, String concept, String value, String statement, String registered) {
        this.user = user;
        this.concept = concept;
        this.value = value;
        this.statement = statement;
        this.registered = registered;
    }
}
