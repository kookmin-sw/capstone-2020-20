package co.kr.rooom.service.domain.alarm;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AlarmRepo extends JpaRepository<Alarm, String> {
    int countByUserAndStatement(String user, String statement);
}

