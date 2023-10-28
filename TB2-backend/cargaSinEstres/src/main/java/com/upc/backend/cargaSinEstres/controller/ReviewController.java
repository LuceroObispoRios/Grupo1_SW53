package com.upc.backend.cargaSinEstres.controller;

import com.upc.backend.cargaSinEstres.exception.ValidationException;
import com.upc.backend.cargaSinEstres.model.Review;
import com.upc.backend.cargaSinEstres.repository.ReviewRepository;
import com.upc.backend.cargaSinEstres.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews/v1")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    private final ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }

    // Method: GET - by CompanyId
    @Transactional(readOnly = true)
    @GetMapping("/reviews/filterByCompanyId")
    public ResponseEntity<List<Review>> getReviewsByCompanyId(@RequestParam(name="companyId") String companyId){
        return new ResponseEntity<List<Review>>(reviewRepository.findByCompanyId(companyId), HttpStatus.OK);
    }

    // Method: POST
    @Transactional
    @PostMapping("/reviews")
    public ResponseEntity<Review> createReview(@RequestBody Review review){
        validateReview(review);
        return new ResponseEntity<Review>(reviewService.createReview(review), HttpStatus.CREATED);
    }

    private void validateReview(Review review){
        if(review.getComment() == null || review.getComment().trim().isEmpty()){
            review.setComment("...");
        }
        if(review.getRating() == 0){
            throw new ValidationException("El score es obligatorio");
        }
    }




}
