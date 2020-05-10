package co.kr.rooom.service.service;

import co.kr.rooom.service.config.JwtTokenProvider;
import co.kr.rooom.service.domain.Room.colorCode.RoomColor;
import co.kr.rooom.service.domain.Room.colorCode.RoomColorRepo;
import co.kr.rooom.service.domain.Room.created.RoomCreatedRepo;
import co.kr.rooom.service.domain.Room.explanation.Explanation;
import co.kr.rooom.service.domain.Room.explanation.ExplanationRepo;
import co.kr.rooom.service.domain.Room.invitaition.Invitation;
import co.kr.rooom.service.domain.Room.invitaition.InvitationRepo;
import co.kr.rooom.service.domain.Room.leader.Leader;
import co.kr.rooom.service.domain.Room.leader.LeaderRepo;
import co.kr.rooom.service.domain.Room.members.Members;
import co.kr.rooom.service.domain.Room.members.MembersRepo;
import co.kr.rooom.service.domain.Room.name.RoomName;
import co.kr.rooom.service.domain.Room.name.RoomNameRepo;
import co.kr.rooom.service.domain.User.authority.Authority;
import co.kr.rooom.service.domain.User.authority.AuthorityRepo;
import co.kr.rooom.service.domain.User.myRoom.MyRoomRepo;
import co.kr.rooom.service.domain.User.user.Name;
import co.kr.rooom.service.domain.User.user.NameRepo;
import co.kr.rooom.service.domain.alarm.AlarmRepo;
import co.kr.rooom.service.web.dto.MyRoomListResponseDto;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UserService {
    private final JwtTokenProvider jwtTokenProvider;
    private final NameRepo nameRepo;
    private final MyRoomRepo myRoomRepo;
    private final AuthorityRepo authorityRepo;
    private final AlarmRepo alarmRepo;

    private final RoomColorRepo roomColorRepo;
    private final RoomCreatedRepo roomCreatedRepo;
    private final RoomNameRepo roomNameRepo;
    private final LeaderRepo leaderRepo;
    private final MembersRepo membersRepo;
    private final ExplanationRepo explanationRepo;
    private final InvitationRepo invitationRepo;

    // @Transactional annotation 을 꼭 써주셔야
    // jpa 사용이 가능합니다.
    @Transactional
    public String hiService(String username) {
        return "Hello World! " + username;
    }

    @Transactional
    public String getToken(String id, String name) {
        try {
            if (!nameRepo.existsByConceptAndStatement(id, "Y")) {
                nameRepo.save(Name.builder().user(id).concept(id).value(name).statement("Y").build());
                authorityRepo.save(Authority.builder().user(id).concept(id).value("user").statement("Y").build());
            }
            return "Bearer " + jwtTokenProvider.createToken(id, Collections.singletonList(""));
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    @Transactional
    public JSONObject loadInfo(String token, int page) {
        HashMap<String, Object> response = new HashMap<>();
        try {

            response.put("User_id", jwtTokenProvider.getUsername(token));
            Name name = nameRepo.findByConceptAndStatement(jwtTokenProvider.getUsername(token), "Y");
            response.put("User_name", name.getValue());
            response.put("Alarm_count", alarmRepo.countByUserAndStatement(jwtTokenProvider.getUsername(token), "Y"));

            List<MyRoomListResponseDto> rooms =
                    myRoomRepo.findAllByConceptLikeAndStatementLike(jwtTokenProvider.getUsername(token), "Y")
                            .stream().map(MyRoomListResponseDto::new).collect(Collectors.toList());
            List<HashMap<String, Object>> roomInfos = new ArrayList<>();
            for (MyRoomListResponseDto room : rooms) {
                HashMap<String, Object> roomInfo = new HashMap<>();
                getRoomInfo(roomInfo, room.getValue());
            }
            response.put("Room_list", roomInfos);

            HashMap<String, Object> invitation = new HashMap<>();
            Invitation invite =
                    invitationRepo.findByValueAndStatementOrderByRegisteredDesc(jwtTokenProvider.getUsername(token), "Y");
            if (invite != null) {
                Name sent = nameRepo.findByConceptAndStatement(invite.getUser(), "Y");
                getRoomInfo(invitation, invite.getRoom());
                invitation.put("pk", invite.getConcept());
                invitation.put("from", sent.getValue());
            }
            response.put("Room_invitation", invitation);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", e.toString());
        }
        return new JSONObject(response);
    }

    private void getRoomInfo(HashMap<String, Object> roomInfo, String roomPk) {
        RoomName roomName = roomNameRepo.findByConceptAndStatement(roomPk, "Y");
        RoomColor roomColor = roomColorRepo.findByConceptAndStatement(roomPk, "Y");
        Leader leader = leaderRepo.findByConceptAndStatement(roomPk, "Y");
        Name leaderName = nameRepo.findByConceptAndStatement(leader.getValue(), "Y");
        Explanation exp = explanationRepo.findByConceptAndStatement(roomPk, "Y");

        roomInfo.put("Room_id",roomPk);
        roomInfo.put("Room_name", roomName.getValue());
        roomInfo.put("Room_color", roomColor.getValue());
        roomInfo.put("Room_leader", leaderName.getValue());
        roomInfo.put("Room_members", membersRepo.countByConceptLikeAndStatement(roomPk + "\\_%", "Y"));
        roomInfo.put("Room_desc", exp.getValue());
    }
}