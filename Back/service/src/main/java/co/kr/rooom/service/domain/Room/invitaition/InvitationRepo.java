package co.kr.rooom.service.domain.Room.invitaition;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepo extends JpaRepository<Invitation, String> {
    Invitation findByValueAndStatementOrderByRegisteredDesc(String value, String statement);
}