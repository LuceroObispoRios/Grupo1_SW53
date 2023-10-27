package com.upc.backend.cargaSinEstres.repository;

import com.upc.backend.cargaSinEstres.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByCompanyId(String companyId);
}
