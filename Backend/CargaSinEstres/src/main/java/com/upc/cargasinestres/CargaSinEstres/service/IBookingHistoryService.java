package com.upc.cargasinestres.CargaSinEstres.service;

import com.upc.cargasinestres.CargaSinEstres.model.dto.BookingHistory.request.BookingHistoryRequestDto;
import com.upc.cargasinestres.CargaSinEstres.model.dto.BookingHistory.response.BookingHistoryResponseDto;
import com.upc.cargasinestres.CargaSinEstres.model.entity.BookingHistory;

import java.util.List;

public interface IBookingHistoryService {

    //create bookingHistory
    public abstract BookingHistoryResponseDto createBookingHistory(Long clientId, Long companyId, BookingHistoryRequestDto bookingHistoryRequestDto);

    //get all bookingHistory for a client by Id
    public abstract List<BookingHistoryResponseDto> getBookingHistoryByClientId(Long id);

    //get all bookingHistory for a company by Id
    public abstract List<BookingHistoryResponseDto> getBookingHistoryByCompanyId(Long id);

    //update bookingHistory chat


}
