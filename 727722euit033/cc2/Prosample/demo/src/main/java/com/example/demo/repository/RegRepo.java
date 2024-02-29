package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Reg;

@Repository
public interface RegRepo extends JpaRepository<Reg,Long> {
    Reg findByEmail(String email);

   
    Reg getUserByEmail(@Param("email") String email);
    
}
