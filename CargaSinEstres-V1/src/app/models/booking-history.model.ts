export interface BookingHistory {
    id: any;
    bookingDate: any;
    pickupAddress: any;
    destinationAddress: any;
    movingDate: any;
    movingTime: any;
    status: any;
    payment: {totalAmount: any, paymentMethod: any};
    hiredCompany: { name: any, logo: any};
}