package com.Farmer.service.service;
import com.Farmer.service.entity.Farmer;
import com.Farmer.service.repositeries.FarmerRepository;
import org.springframework.stereotype.Service;

@Service
public class FarmerService {
    private final FarmerRepository farmerRepo;

    public FarmerService(FarmerRepository farmerRepo) {
        this.farmerRepo = farmerRepo;
    }
    public Farmer saveFarmer(Farmer farmer) {
        return farmerRepo.save(farmer);
    }


}