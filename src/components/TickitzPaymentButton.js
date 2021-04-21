import React, { Component } from "react";
import { Button } from "react-bootstrap";
import TickitzPaymentStyle from "./PaymentStyle.module.css";

class TickitzPaymentButton extends Component {
  render() {
    return (
      <div>
        <Button
          className={`${TickitzPaymentStyle.payment_button} ${TickitzPaymentStyle.size_image}`}
        >
          <img src="/img/logo_bca.png" alt="tickitz payment" />
        </Button>
      </div>
    );
  }
}

export default TickitzPaymentButton;
