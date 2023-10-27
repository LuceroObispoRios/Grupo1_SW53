package com.upc.backend.cargaSinEstres.controller;

import com.upc.backend.cargaSinEstres.exception.ValidationException;
import com.upc.backend.cargaSinEstres.repository.BookingHistoryRepository;
import com.upc.backend.cargaSinEstres.service.BookingHistoryService;
import com.upc.backend.cargaSinEstres.model.BookingHistory;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/") // esto viene en el enunciado
public class BookingHistoryController {

    @Autowired
    private BookingHistoryService bookingHistoryService;

    private final BookingHistoryRepository bookingHistoryRepository;

    public BookingHistoryController(BookingHistoryRepository bookingHistoryRepository) {
        this.bookingHistoryRepository = bookingHistoryRepository;
    }

    //Method : POST
    @Transactional
    @PostMapping("/bookingHistory")
    public ResponseEntity<BookingHistory> createBookingHistory(@RequestBody BookingHistory bookingHistory){
        validateBookingHistory(bookingHistory); //validación
        return new ResponseEntity<BookingHistory>(bookingHistoryService.createReservation(bookingHistory), HttpStatus.CREATED);
    }

    //Method: GET - by ClientId
    @Transactional //(readOnly = true)
    @GetMapping("/bookingHistory/filterByClientId")
    public ResponseEntity<List<BookingHistory>> getAllBookingHistoryByClientId(@RequestParam (name="clientId") String clientId){
        return new ResponseEntity<List<BookingHistory>>(bookingHistoryRepository.findByClientId(clientId), HttpStatus.OK);
    }


    //Method: GET - by CompanyId
    @Transactional //(readOnly = true)
    @GetMapping("/bookingHistory/filterByCompanyId")
    public ResponseEntity<List<BookingHistory>> getAllBookingHistoryByCompanyId(@RequestParam (name="companyId") String companyId){
        return new ResponseEntity<List<BookingHistory>>(bookingHistoryRepository.findByCompanyId(companyId), HttpStatus.OK);
    }


    //Method: Patch - by BookingHistoryId
    /*@Transactional
    @PatchMapping("/bookingHistory/{bookingHistoryId}")
    public ResponseEntity<BookingHistory> editBookingHistory()*/


    //validation
    private void validateBookingHistory(BookingHistory bookingHistory){
        if(bookingHistory.getPickupAddress() == null || bookingHistory.getPickupAddress().isEmpty()){
            throw new ValidationException("La dirección de recogida debe ser obligatoria"); //error 400
        }
    }

}
