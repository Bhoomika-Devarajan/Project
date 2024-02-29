package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Reg;
import com.example.demo.service.RegSer;

@RestController
public class RegCon {
    @Autowired
    RegSer regser;
    @PostMapping("/preg1")
    public Reg addreg(@RequestBody Reg reg)
    {
        return regser.addreg(reg);
    }
    @GetMapping("/preg2")
    public List<Reg> getreg()
    {
        return regser.getreg();
    }
    @GetMapping("/preg3/{email}")
    public Reg getUserByEmail(@PathVariable String email)
    {
        return regser.getUserByEmail(email);
    }
    @PutMapping("preg4/{rid}")
    public Reg editreg(@PathVariable Long rid,@RequestBody Reg reg)
    {
        return regser.editreg(rid,reg);
    }
    @DeleteMapping("preg5/{rid}")
    public String deletereg(@PathVariable Long rid)
    {
        return regser.deletereg(rid);
    }

}
