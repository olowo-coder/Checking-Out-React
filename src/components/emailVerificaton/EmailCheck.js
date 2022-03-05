import React, { useState, useEffect } from "react";
import "./EmailCheck.css";
import Cancel from "./cancel.svg";
import Checked from "./checked.svg";

const EmailCheck = () => {
  const API_BASE_URL = "http://fitnesso/app";
  const [emailToken, setEmailToken] = useState("");
  const [successEmail, setSuccessEmail] = useState(true);
  const queryParams = new URLSearchParams(window.location.search);
  const getEmailToken = queryParams.get("token");

  const confirmEmailReq = async (tokenCheck) => {
    console.log(tokenCheck);
    const res = await fetch(`${API_BASE_URL}/confirm?token=${tokenCheck}`).catch(err => {console.log(err);});
    const data = await res.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    console.log(getEmailToken);
    setEmailToken(getEmailToken);
    const res = confirmEmailReq(emailToken);
    setSuccessEmail(res.success);
  }, [emailToken, getEmailToken]);

  return (
    <div>
      <div className="EmailCheck-container">
        <div className="EmailCheck-row">
          <img
            src={successEmail ? Checked : Cancel}
            alt="Checked"
            className="EmailCheck-svg-styling-cancel"
          />
        </div>

        <div className="EmailCheck-row">
          <div className="EmailCheck-design EmailCheck-heading">
            {successEmail ? "Email Verified" : "Token Expired"}
          </div>
        </div>
        {/* <div className="EmailCheck-row EmailCheck-cal-split">
          <div className="EmailCheck-method-title-info">{emailToken}</div>
        </div> */}
      </div>
    </div>
  );
};

export default EmailCheck;
