import React, { useState } from "react";
import "./PaymentInfo.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentInfo = () => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus({ focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setName({ [name]: value });
  };
  return (
    <div>
      <div className="container">
        <div className="row split title-content">
          <div className="design heading">Payment Info</div>
          <div className="design">*Required</div>
        </div>
        <div className="row clean">
          <div className="card-adjust">
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />
          </div>
          <div>
            <div className="info-input title-content input-container">
              <label>Card Number* </label>
              <input
                className="big-input"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                type="text"
              />
            </div>
            <div className="info-input title-content small-input input-container">
              <label>Expiration Date MM/YY* </label>
              <input
                maxLength="5"
                type="text"
                name="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            <div className="info-input title-content small-input input-container">
              <label>Card CVC* </label>
              <input
                type="password"
                name="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
