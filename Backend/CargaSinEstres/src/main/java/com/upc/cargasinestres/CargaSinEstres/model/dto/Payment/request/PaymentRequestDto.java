package com.upc.cargasinestres.CargaSinEstres.model.dto.Payment.request;

import com.upc.cargasinestres.CargaSinEstres.model.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestDto {

    private double totalAmount;
    private String paymentMethod;
    private BookingHistory bookingHistory;

}
