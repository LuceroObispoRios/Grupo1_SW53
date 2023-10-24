package com.upc.backend.cargaSinEstres.service.impl;

import com.upc.backend.cargaSinEstres.model.BookingHistory;
import com.upc.backend.cargaSinEstres.service.BookingHistoryService;
import org.springframework.beans.factory.annotation.Autowired;

public class BookingHistoryImpl implements BookingHistoryService {

    @Autowired
    private BookingHistoryService bookingHistoryService;

    @Override
    public BookingHistory createReservation(BookingHistory bookingHistory) {
        return bookingHistoryService.createReservation(bookingHistory);
    }
}
