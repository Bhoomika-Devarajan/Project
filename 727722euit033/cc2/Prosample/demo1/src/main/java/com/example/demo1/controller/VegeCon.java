package com.example.demo1.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo1.model.Veg;
import com.example.demo1.service.VegSer;

@RestController
public class VegeCon
{
   @Autowired
   VegSer vegser;

   
   @PostMapping("/pathh1")
   public Veg add(@RequestBody Veg veg)
   {
    return vegser.add(veg);
   }
   @GetMapping("/pathh2")
   public List<Veg> get()
   {
    return vegser.get();
   }
   @GetMapping("/pathh3/{pId}")
   public Optional<Veg> getveg(@PathVariable Long pId)
   {

    return vegser.getveg(pId);
   }
   @PutMapping("/pathh4/{pId}")
   public Veg editmed(@PathVariable Long pId,@RequestBody Veg veg)
   {
       return vegser.editmed(pId,veg);
   }
    @DeleteMapping("/pathh5/{vId}")
    public String delete(@PathVariable Long vId)
    {
        return vegser.delete(vId);
    }
    @GetMapping("/pathh6/{offset}/{pagesize}")
    public List<Veg> getpage(@PathVariable int offset,@PathVariable int pagesize)
    {
        return vegser.page(pagesize,offset);
    }
    @GetMapping("/pathh7/{field}")
    public List<Veg> getsort(@PathVariable String field)
    {
        return vegser.sort(field);
    }
    @GetMapping("/pathh8/{pageNumber}/{pageSize}/{field}")
    public List<Veg> getpagesort(@PathVariable int pageNumber,@PathVariable int pageSize,@PathVariable String field)
    {
        return vegser.getpagesort(pageNumber,pageSize,field);
    }
}  