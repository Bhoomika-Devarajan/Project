package com.example.demo1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo1.model.Items;

@Repository
public interface ItemRepo extends JpaRepository<Items,Long> {
    
}
