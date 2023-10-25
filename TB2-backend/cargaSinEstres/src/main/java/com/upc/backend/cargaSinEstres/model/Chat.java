package com.upc.backend.cargaSinEstres.model;

import jakarta.persistence.*;

@Entity
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user", nullable = false)
    private String user;

    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "dateTime", nullable = false)
    private String dateTime;

    @ManyToOne
    @JoinColumn(name = "bookingHistory_id")
    private BookingHistory bookingHistory;

}
