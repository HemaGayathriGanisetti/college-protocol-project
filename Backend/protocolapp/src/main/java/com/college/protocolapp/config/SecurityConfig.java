 package com.college.protocolapp.config;

import com.college.protocolapp.security.JwtAuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.*;

import org.springframework.web.cors.*;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthFilter filter;

    @Bean
    public SecurityFilterChain chain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))

            .authorizeHttpRequests(auth -> auth

                // 🔓 PUBLIC APIs
                .requestMatchers("/api/auth/**").permitAll()

                // 👨‍💼 ADMIN ONLY
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/users/**").hasRole("ADMIN")

                // 🧪 LABS
                .requestMatchers(HttpMethod.GET, "/api/labs/**")
                    .hasAnyRole("ADMIN", "STUDENT")
                .requestMatchers(HttpMethod.POST, "/api/labs/**")
                    .hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/api/labs/**")
                    .hasRole("ADMIN")

                // 📚 RULES (IMPORTANT FIX)
                    .requestMatchers(HttpMethod.GET, "/api/rules/**")
                    .hasAnyRole("ADMIN", "STUDENT")

                .requestMatchers(HttpMethod.POST, "/api/rules/**")
                    .hasRole("ADMIN")

                // 📂 CATEGORY
                .requestMatchers("/api/categories/**")
                    .hasAnyRole("ADMIN", "STUDENT")

                // 📘 PROTOCOL
                .requestMatchers("/api/protocol/**")
                    .hasAnyRole("ADMIN", "STUDENT")

                // 👨‍🎓 STUDENT
                .requestMatchers("/api/student/**")
                    .hasAnyRole("ADMIN", "STUDENT")
                    
                 // 📅 TIMETABLE
                    .requestMatchers(HttpMethod.POST, "/api/timetable/**")
                    .permitAll()

                // 🔐 DEFAULT
                .anyRequest().authenticated()
            )

            // 🔒 STATELESS JWT
            .sessionManagement(s ->
                s.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )

            // 🔑 JWT FILTER
            .addFilterBefore(
                filter,
                org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }

    // 🔐 PASSWORD ENCODER
    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    // 🌐 CORS FOR REACT NATIVE
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();

        config.addAllowedOriginPattern("*"); // React Native support
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", config);

        return source;
    }
}