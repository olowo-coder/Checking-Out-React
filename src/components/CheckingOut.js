import React, { useState, useEffect } from "react";
import "./CheckingOut.css";
import { useForm } from "react-hook-form";
import {
  Route,
  Routes,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import CustomerInfo from "./CustomerInfo";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./ShippingAddress";
import DiscountCoupon from "./DiscountCoupon";
import PaymentInfo from "./PaymentInfo";
import ShippingMethod from "./ShippingMethod";
import ItemsOrder from "./ItemsOrder";
import OrderSummary from "./OrderSummary";
import OrderConfirmation from "./orderStuff/OrderConfirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

function CheckingOut() {
    const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({ email: "" });
  const [discount, setDiscount] = useState({});
  const [shipMethod, setShipMethod] = useState({});
  const [cardInfo, setCardInfo] = useState({});
  const [shipping, setShipping] = useState({});
  const [billing, setBilling] = useState({});
//   const [isFilled, setIsFilled] = useState(false);

  const [allData, setAllData] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(customerInfo.email === '' || Object.keys(cardInfo).length < 3
    || Object.keys(shipping).length < 6
    || Object.keys(billing).length < 6
    || Object.keys(shipMethod).length === 0){
        alert("Please enter all required information");
        return;
    }
    allData.email= customerInfo.email;
    allData.shippingAddress = shipping;
    allData.shippingMethod = shipMethod;
    allData.paymentRequest = cardInfo;
    allData.billingAddress = billing;
    allData.discountRequest = discount;
    allData.shoppingCartUniqueId = "yet";
    console.log(allData);
    navigate("/checkout/order-confirmation");
  };

  return (
    <div className="CheckingOut-row">
      <div className="CheckingOut-left-container">
          <Routes>
            <Route
              path="order-confirmation"
              element={customerInfo.email === '' ? <Navigate to="/checkout" /> : <OrderConfirmation allData={allData} />}
            />
            <Route
              path="/"
              element={
                <div>
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
                  <DiscountCoupon
                    discount={discount}
                    setDiscount={setDiscount}
                  />
                </div>
              }
            />
          </Routes>
      </div>
      <div className="CheckingOut-right-container">
        <div className="CheckingOut-right-order">
          <ItemsOrder />
        </div>
        <OrderSummary />
        <Routes>
        <Route
              path="order-confirmation"
              element={
                <div className="CheckingOut-place-pay-now">
                <button><FontAwesomeIcon icon={faMoneyBillWave} /> PAY NOW</button>
                </div>}
            />
            <Route
              path="/"
              element={<button
                type="button"
                onClick={handleSubmit}
                className="CheckingOut-place-second-slide"
              >
                <div>PLACE ORDER</div>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>}
            />
        </Routes>
      </div>
    </div>
  );
}

export default CheckingOut;
