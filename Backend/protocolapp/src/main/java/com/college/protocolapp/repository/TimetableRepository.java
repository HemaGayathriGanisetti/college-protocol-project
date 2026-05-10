package com.college.protocolapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.college.protocolapp.model.Timetable;

public interface TimetableRepository extends JpaRepository<Timetable, Long> {

}
