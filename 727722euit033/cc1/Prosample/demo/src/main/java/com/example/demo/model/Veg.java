package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="vegetables")
public class Veg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long pId;
  String category;
  String pName;
  String pPrice;
  String pQty;
public Long getpId() {
    return pId;
}
public void setpId(Long pId) {
    this.pId = pId;
}
public String getCategory() {
    return category;
}
public void setCategory(String category) {
    this.category = category;
}
public String getpName() {
    return pName;
}
public void setpName(String pName) {
    this.pName = pName;
}
public String getpPrice() {
    return pPrice;
}
public void setpPrice(String pPrice) {
    this.pPrice = pPrice;
}
public String getpQty() {
    return pQty;
}
public void setpQty(String pQty) {
    this.pQty = pQty;
}

}
