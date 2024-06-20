import React from "react";

import "./Contribute.css"
export default function Contribute() {
  return (
    <>
      <div className="contribute-card">
        <div className="c-left">
          <div className="c-head">
            <b>

            Kindly contribute a minimum of 100 rs. on the below bank details.
            </b>
          </div>
          <div className="c-bank-details">
            <div className="aca">
            <p><b>ACCOUNT DETAILS</b></p>
            </div>
            <div className="c-b-details">
              <p>
                <b>ACCOUNT NAME : </b>YOUTH FOR SELF AND SOCIAL CHANGE <br />
                <b>BANK/BRANCH NAME : </b>PUNJAB NATIONAL BANK (NARI ROAD) <br />
                <b>ACCOUNT NUMBER : </b>6370000100014693 <br />
                <b>IFS CODE : </b>PUNB0637000 <br />
                <b>UPI ID : </b> 9860819238m@pnb <br />
              </p>
             
            </div>
          </div>
        </div>
        <div className="c-right">
            <img src="\public\AIISCA-QR-CODE.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
