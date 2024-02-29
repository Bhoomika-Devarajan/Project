package com.example.demo1.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="vegetables")
public class Veg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long pId;
  String category;
  String pName;
  String pPrice;
  String pQty;

   @OneToMany(cascade = CascadeType.ALL)  // all the changes in author should be reflected in Book
   List<Items> items=new ArrayList<>();

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

public List<Items> getItems() {
    return items;
}

public void setItems(List<Items> items) {
    this.items = items;
}  
 
}