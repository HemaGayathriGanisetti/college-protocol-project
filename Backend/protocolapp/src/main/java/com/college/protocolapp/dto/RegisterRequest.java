package com.college.protocolapp.dto;

import com.college.protocolapp.model.Role;

import lombok.Data;

@Data
 
public class RegisterRequest {
    private String email;
    private String password;
    private Role role;
}
	 
	 