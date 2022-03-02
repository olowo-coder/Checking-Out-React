import React from 'react';
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div>
        <div className="OrderConfirmation-container">
        <div className="OrderConfirmation-row OrderConfirmation-split OrderConfirmation-title-content">
          <div className="OrderConfirmation-design OrderConfirmation-heading">Customer Info</div>
          <div className="OrderConfirmation-design">*Required</div>
        </div>
        <div className="OrderConfirmation-info-input OrderConfirmation-title-content OrderConfirmation-input-container">
          <label>Email* </label>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation;