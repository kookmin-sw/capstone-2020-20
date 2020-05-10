package co.kr.rooom.service.domain.Room.invitaition;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "room_invitation")
public class Invitation {
    @Column(nullable = false, length = 9)
    private String user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 21)
    private long concept;

    @Column(nullable = false, length = 9)
    private String value;

    @Column(nullable = false, length = 50)
    private String room;

    @Column(nullable = false, length = 1)
    private String statement;

    @Column(nullable = false, length = 30)
    private String registered;

    @Builder
    public Invitation(String user, String value, String room, String statement, String registered) {
        this.user = user;
        this.value = value;
        this.room = room;
        this.statement = statement;
        this.registered = registered;
    }
}
