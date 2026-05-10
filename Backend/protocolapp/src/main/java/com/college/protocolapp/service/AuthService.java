package com.college.protocolapp.service;

import com.college.protocolapp.dto.LoginRequest;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import com.college.protocolapp.dto.LoginResponse;
import com.college.protocolapp.dto.RegisterRequest;
import com.college.protocolapp.model.*;
import com.college.protocolapp.repository.UserRepository;
import com.college.protocolapp.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtService jwt;

    public String register(RegisterRequest request) {

        if (repo.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists");
        }

        User u = new User();
        u.setEmail(request.getEmail().toLowerCase().trim());
        u.setPassword(encoder.encode(request.getPassword()));

        // IMPORTANT FIX 👇
        if (request.getRole() != null) {
            u.setRole(request.getRole());
        } else {
            u.setRole(Role.STUDENT);
        }

        repo.save(u);

        return "Registered Successfully as " + u.getRole();
    }
    
    

    // LOGIN
    public LoginResponse login(LoginRequest request) {

        User u = repo.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
                );

        if (!encoder.matches(request.getPassword(), u.getPassword())) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid password"
            );
        }

        String token = jwt.generateToken(
                u.getEmail(),
                u.getRole().name()
        );

        return new LoginResponse(token, "Login successful");
    }
}