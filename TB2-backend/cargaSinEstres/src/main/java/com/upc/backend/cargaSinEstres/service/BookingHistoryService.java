package com.upc.backend.cargaSinEstres.service;

import com.upc.backend.cargaSinEstres.model.BookingHistory;

public interface BookingHistoryService {

    public abstract BookingHistory createReservation(BookingHistory bookingHistory);
}
