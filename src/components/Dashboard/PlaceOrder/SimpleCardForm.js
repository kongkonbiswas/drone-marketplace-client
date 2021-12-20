import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Button } from "react-bootstrap";

const SimpleCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymemtError, setPaymentError] = useState(null);
  const [paymemtSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button variant="primary" type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
      {paymemtError && <p className="text-danger">{paymemtError}</p>}
      {paymemtSuccess && (
        <p className="text-success">Your Payment is Successful</p>
      )}
    </div>
  );
};

export default SimpleCardForm;
