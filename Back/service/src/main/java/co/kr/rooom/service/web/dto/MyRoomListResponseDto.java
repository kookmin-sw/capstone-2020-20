package co.kr.rooom.service.web.dto;

import co.kr.rooom.service.domain.User.myRoom.MyRoom;
import lombok.Getter;

@Getter
public class MyRoomListResponseDto {
    private final String user;
    private final String concept;
    private final String value;
    private final String statement;
    private final String registered;

    public MyRoomListResponseDto(MyRoom entity) {
        this.user = entity.getUser();
        this.concept = entity.getConcept();
        this.value = entity.getValue();
        this.statement = entity.getStatement();
        this.registered = entity.getRegistered();
    }
}
