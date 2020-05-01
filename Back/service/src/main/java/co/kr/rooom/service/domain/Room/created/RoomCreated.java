package co.kr.rooom.service.domain.Room.created;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@Documnet(collection = "room_created")
public class RoomCreated {

    private String user;

    @Id
    private String concept;

    private String value;

    private String statement;

    private String registered;

    @Builder
    public RoomCreated(String user, String concept, String value, String statement, String registered) {
        this.user = user;
        this.concept = concept;
        this.value = value;
        this.statement = statement;
        this.registered = registered;
    }
}
