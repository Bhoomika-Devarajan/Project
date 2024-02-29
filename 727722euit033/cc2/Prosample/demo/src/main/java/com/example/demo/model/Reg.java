package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Registration")

public class Reg {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   Long rid;
   String username;
   String email;
   String pass;
public Long getRid() {
    return rid;
}
public void setRid(Long rid) {
    this.rid = rid;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPass() {
    return pass;
}
public void setPass(String pass) {
    this.pass = pass;
}



}
