export interface BookingHistory {
    id: any;
    idCompany: any;
    idClient: any;
    bookingDate: any;
    pickupAddress: any;
    destinationAddress: any;
    movingDate: any;
    movingTime: any;
    services: any;
    status: any;
    payment: {totalAmount: any, paymentMethod: any};
    hiredCompany: { name: any, logo: any};
}
