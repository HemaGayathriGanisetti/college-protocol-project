package com.college.protocolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Timetable")
public class Timetable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String day;       // Monday, Tuesday
    private String subject;   // DBMS, Java
    private String time;      // 10:00 - 11:00
    private String faculty;   // Mr. Rao
    private String room;      // Lab 1

    // getters & setters
}


