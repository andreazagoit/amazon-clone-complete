import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.scss";

const promise = loadStripe(
  "pk_test_51H9V3DJYTWFMSQx4JR2oj81NjlHqPTqE2UdgU2iXaJhRdGhckeZyMggk4VcQxINB6szHo4ToFTBNL0n7Lyznavbt00UgZRk1Iw"
);

export const Payment = () => {
  return (
    <div className="payment">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
