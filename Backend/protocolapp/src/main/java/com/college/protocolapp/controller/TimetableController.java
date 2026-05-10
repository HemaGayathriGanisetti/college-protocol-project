package com.college.protocolapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.college.protocolapp.model.Timetable;
import com.college.protocolapp.service.TimetableService;

@RestController
@RequestMapping("/api/timetable")
@CrossOrigin
public class TimetableController {

    private final TimetableService service;

    public TimetableController(TimetableService service) {
        this.service = service;
    }

    @GetMapping
    public List<Timetable> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Timetable create(@RequestBody Timetable t) {
        return service.save(t);
    }
}