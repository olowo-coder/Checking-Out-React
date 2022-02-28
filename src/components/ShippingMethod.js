import React from "react";
import "./ShippingMethod.css";

const ShippingMethod = () => {
  return (
    <div>
      <div className="container">
        <div className="row split title-content">
          <div className="design heading">Shipping Method</div>
          <div className="design">*Required</div>
        </div>
        <div className="method-container title-content row">
          <div>
            <input type="radio" name="customer-info" />
          </div>
          <div className="method-dep">
            <div className="method-title">Flat rate</div>
            <div className="method-title-info">Standard flat rate for all shipments</div>
          </div>
          <div className="method-amount">$ 29.90 USD</div>
        </div>
        <div className="method-container title-content row">
          <div>
            <input type="radio" name="customer-info" />
          </div>
          <div className="method-dep">
            <div className="method-title">Expedited Shipping </div>
            <div className="method-title-info">Expedited shipping to get the shipment in a day or two</div>
          </div>
          <div className="method-amount">$ 29.90 USD</div>
        </div>
        <div className="method-container title-content row">
          <div>
            <input type="radio" name="customer-info" />
          </div>
          <div className="method-dep">
            <div className="method-title">Overnight Shipping</div>
            <div className="method-title-info">An expensive option to get the shipment on the next business day</div>
          </div>
          <div className="method-amount">$ 129.90 USD</div>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
