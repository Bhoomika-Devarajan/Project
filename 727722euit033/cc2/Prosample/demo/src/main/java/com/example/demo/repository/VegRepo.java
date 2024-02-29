package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Veg;
@Repository

public interface VegRepo extends JpaRepository<Veg,Long>
{
}
