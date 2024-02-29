package com.example.demo1.model;

import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Transactional
@Table(name="Items")
public class Items {
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   Long iid;
   String iname;
   String iprice;
public Long getIid() {
    return iid;
}
public void setIid(Long iid) {
    this.iid = iid;
}
public String getIname() {
    return iname;
}
public void setIname(String iname) {
    this.iname = iname;
}
public String getIprice() {
    return iprice;
}
public void setIprice(String iprice) {
    this.iprice = iprice;
}
   
}
