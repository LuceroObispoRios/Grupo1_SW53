package com.upc.backend.cargaSinEstres.service.impl;

import com.upc.backend.cargaSinEstres.model.Review;
import com.upc.backend.cargaSinEstres.repository.ReviewRepository;
import com.upc.backend.cargaSinEstres.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
}
