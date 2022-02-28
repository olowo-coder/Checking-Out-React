import React from "react";
import "./ShippingAddress.css";

const ShippingAddress = ({addressName}) => {
  return (
    <div>
      <div className="container">
        <div className="row split title-content">
          <div className="design heading">{addressName}</div>
          <div className="design">*Required</div>
        </div>
        <div className="info-input title-content input-container">
          <label>Full Name* </label>
          <input className="big-input" type="text" name="customer-info" />
        </div>
        <div className="info-input title-content input-container">
          <label>Street Address* </label>
          <input className="big-input" type="text" name="customer-info" />
        </div>
        <div className="row all-small">
          <div className="info-input title-content input-container">
            <label>City* </label>
            <input className="small-input" type="text" name="customer-info" />
          </div>
          <div className="info-input title-content input-container">
            <label>State/province* </label>
            <input className="small-input" type="text" name="customer-info" />
          </div>
          <div className="info-input title-content input-container">
            <label>Zip/Postal Code* </label>
            <input className="small-input" type="text" name="customer-info" />
          </div>
        </div>
        <div className="info-input title-content input-container">
          <label>Country* </label>
          <input className="big-input" type="text" name="customer-info" />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
