package com.college.protocolapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.college.protocolapp.model.Timetable;
import com.college.protocolapp.repository.TimetableRepository;

@Service
public class TimetableService {

 private final TimetableRepository repo;

 public TimetableService(TimetableRepository repo) {
     this.repo = repo;
 }

 public List<Timetable> getAll() {
     return repo.findAll();
 }

 public Timetable save(Timetable t) {
     return repo.save(t);
 }
}
