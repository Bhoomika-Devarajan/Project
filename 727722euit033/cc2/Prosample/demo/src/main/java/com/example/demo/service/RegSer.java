package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Reg;
import com.example.demo.repository.RegRepo;

@Service
public class RegSer {
    @Autowired
    RegRepo regrepo;
    public Reg addreg(Reg reg)
    {
        return regrepo.save(reg);
    }
    public List<Reg> getreg()
    {
        return regrepo.findAll();
    }
    public Optional<Reg> getregbyid(Long id)
    {
        return regrepo.findById(id);
    }
    public Reg editreg(Long rid,Reg reg)
    {
        Reg med=regrepo.findById(rid).orElse(null);
        if(med!=null)
        {
            med.setUsername(reg.getUsername());
            med.setEmail(reg.getEmail());
            med.setPass(reg.getPass());
            return regrepo.saveAndFlush(med);
        }
        else
        {
            return null;
        }
    }
    public String deletereg(Long rid)
    {
        regrepo.deleteById(rid);
        return("Successfully deleted");
    }
    public Reg getUserByEmail(String email) {
        // Using findByEmail method
        // User user = userRepository.findByEmail(email);
        
        // Using getUserByEmail method
        Reg user = regrepo.getUserByEmail(email);
        
        return user;
    }
    
    
}
