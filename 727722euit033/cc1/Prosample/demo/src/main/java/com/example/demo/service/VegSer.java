package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Veg;
import com.example.demo.repository.VegRepo;

@Service
public class VegSer {
  @Autowired
  VegRepo vegrepo;
  public Veg add(Veg veg)
  {
    return vegrepo.save(veg);
  }
  public List<Veg> get()
  {
    return vegrepo.findAll();
  }
  public Optional<Veg> getveg(Long id)
  {
    return vegrepo.findById(id);
  }
  public Veg editmed(Long vId,Veg veg)
  {
    Veg medavail=vegrepo.findById(vId).orElse(null);
    if(medavail!=null)
    {
        medavail.setCategory(veg.getCategory());
        medavail.setpName(veg.getpName());
        medavail.setpPrice(veg.getpPrice());
        medavail.setpQty(veg.getpQty());
        return vegrepo.saveAndFlush(medavail);
    }
    else{
        return null;
    }

  }
  public String delete(Long vId)
  {
    vegrepo.deleteById(vId);
    return("Successfully deleted");
  }
    
}
