package com.college.protocolapp.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.college.protocolapp.model.Rule;
 

public interface RuleRepository extends JpaRepository<Rule, Long> {


    List<Rule> findByCategoryId(Long categoryId);
    
    @Query("SELECT r FROM Rule r WHERE " +
            "LOWER(r.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(r.description) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(r.category) LIKE LOWER(CONCAT('%', :keyword, '%'))")
     List<Rule> searchRules(String keyword);
	    
	}