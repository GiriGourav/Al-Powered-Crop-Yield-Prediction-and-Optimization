package com.Farmer.service.controller;

import com.Farmer.service.entity.Farmer;
import com.Farmer.service.service.FarmerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/farmer")
public class FarmerController {
    private final FarmerService farmerService;

    public FarmerController(FarmerService farmerService) {
        this.farmerService = farmerService;
    }

    @PostMapping
    public Farmer saveFarmer(@RequestBody Farmer farmer) {
        return farmerService.saveFarmer(farmer);
    }


}
