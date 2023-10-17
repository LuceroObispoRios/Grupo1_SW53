export interface Subscription {
    id: any;
    firma: any;
    idCompany: any;
    subscriptionDate: any;
    subscriptionType: any;
    payment: {
      paymentMethod: any;
    };
    hiredCompany: {
      name: any;
      logo: any;
    };
  }