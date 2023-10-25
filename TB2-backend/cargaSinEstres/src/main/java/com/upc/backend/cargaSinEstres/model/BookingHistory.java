package com.upc.backend.cargaSinEstres.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="bookingHistory")
public class BookingHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name="idCompany", nullable = false, foreignKey = @ForeignKey(name="FK_bookingHistory_company"))
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Company company; //Falta crear entidad Company

    @ManyToOne
    @JoinColumn(name="idClient", nullable = false, foreignKey = @ForeignKey(name="FK_bookingHistory_client"))
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Client client;

    @Column(name="bookingDate", nullable = false)
    private Date bookingDate;

    @Column(name="pickupAddress", nullable = false)
    private String pickupAddress;

    @Column(name="destinationAddress", nullable = false)
    private String destinationAddress;

    @Column(name="movingDate", nullable = false)
    private Date movingDate;

    @Column(name="movingTime", nullable = false)
    private Time movingTime;

    @Column(name="status", nullable = false)
    private String status;

    @Column(name="Services", nullable = false)
    private String Services;

    @OneToOne(cascade = CascadeType.ALL)
    private Payment payment;

    @OneToOne(cascade = CascadeType.ALL)
    private HiredCompany hiredCompany;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Chat> chat;



}
