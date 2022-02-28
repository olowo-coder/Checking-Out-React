import React from 'react';
import CustomerInfo from './CustomerInfo';
import ShippingAddress from './ShippingAddress';
import BillingAddress from './ShippingAddress';
import DiscountCoupon from './DiscountCoupon';
import PaymentInfo from './PaymentInfo';
import ShippingMethod from './ShippingMethod';

function CheckingOut() {
  return (
    <div>
        <CustomerInfo/>
        <ShippingAddress addressName={"Shipping Address"}/>
        <ShippingMethod />
        <PaymentInfo />
        <BillingAddress addressName={"Billing Address"} />
        <DiscountCoupon/>
    </div>
  )
}

export default CheckingOut;
