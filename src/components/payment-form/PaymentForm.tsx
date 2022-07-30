import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, BUTTON_TYPE_CLASSES } from "../button/Button";
import { getCartTotal } from "../../store/cart/cart-selector";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";
import React, { useState } from "react";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(getCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Karl Tumpalan",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
