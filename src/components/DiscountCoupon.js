import React from 'react';
import "./DiscountCoupon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'

const DiscountCoupon = () => {
  return (
    <div>
        <div className="container">
        <div className="info-input title-content input-container">
          <label>Discount Code </label>
          <div className="row">
          <input type="text" name="customer-info" /><button><FontAwesomeIcon icon={faGift} /> APPLY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountCoupon;