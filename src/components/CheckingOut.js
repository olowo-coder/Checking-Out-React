import React, { useState, useEffect } from "react";
import "./CheckingOut.css";
import CustomerInfo from "./CustomerInfo";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./ShippingAddress";
import DiscountCoupon from "./DiscountCoupon";
import PaymentInfo from "./PaymentInfo";
import ShippingMethod from "./ShippingMethod";
import ItemsOrder from "./ItemsOrder";
import OrderSummary from "./OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function CheckingOut() {
  const [customerInfo, setCustomerInfo] = useState({ email: "" });
  const [discount, setDiscount] = useState({ code: "" });
  const [shipMethod, setShipMethod] = useState({});
  const [cardInfo, setCardInfo] = useState({});
  const [shipping, setShipping] = useState({});
  const [billing, setBilling] = useState({});

  const [allData, setAllData] = useState({
    // customerInfo: { email: "" },
    // discount: { code: "" },
    // cardInfo: { cardNumber: "", expiry: "", cvc: "" },
    // orderSummary: {
    //   subtotal: "",
    //   flatRate: "",
    //   total: "",
    // },
    // setShipping: {
    //   fullName: "",
    //   streetAddress: "",
    //   city: "",
    //   state: "",
    //   zipCode: "",
    //   country: "",
    // },
  });
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setShipping({
  //         ...shipping,
  //         [name]: value
  //       })
  //   }

  //   const handleInputChangeDis = (e) => {
  //     const { name, value } = e.target;
  //     setShipping({
  //         ...shipping,
  //         [name]: value
  //       })
  //   }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    allData.customerInfo = customerInfo;
    allData.shipping = shipping;
    allData.shipMethod = shipMethod;
    allData.cardInfo = cardInfo;
    allData.billing = billing;
    allData.discount = discount;

    // allData = {customerInfo, shipping, shipMethod, cardInfo, discount, billing}

    // console.log(customerInfo);
    // console.log(discount);
    // console.log(shipping);
    // console.log(shipMethod);
    // console.log(cardInfo);
    // console.log(billing);
    console.log(allData);
  };

  return (
    <div className="CheckingOut-row">
      <div className="CheckingOut-left-container">
        <CustomerInfo
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
        />
        <ShippingAddress
          shipping={shipping}
          setShipping={setShipping}
          addressName={"Shipping Address"}
        />
        <ShippingMethod setShipMethod={setShipMethod} />
        <PaymentInfo setCardInfo={setCardInfo} cardInfo={cardInfo} />
        <BillingAddress
          shipping={billing}
          setShipping={setBilling}
          addressName={"Billing Address"}
        />
        <DiscountCoupon discount={discount} setDiscount={setDiscount} />
      </div>
      <div className="CheckingOut-right-container">
        <div className="CheckingOut-right-order">
          <ItemsOrder />
        </div>
        <OrderSummary />
        {/* <button className="CheckingOut-place-order" onClick={handleSubmit}><FontAwesomeIcon icon={faAngleRight} />PLACE ORDER</button> */}
        <button type="button" onClick={handleSubmit} className="CheckingOut-place-second-slide">
          <div>PLACE ORDER</div>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default CheckingOut;
