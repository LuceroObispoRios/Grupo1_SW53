package com.upc.backend.cargaSinEstres.repository;

import com.upc.backend.cargaSinEstres.model.BookingHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingHistoryRepository extends JpaRepository<BookingHistory, Long>{

    List<BookingHistory> findById(String id);
}
