import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCart } from "../features/products/productsSlice";
import { selectUser } from "../features/user/userSlice";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const CheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  let history = useHistory();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      window
        .fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid: user.uid, cart: cart }),
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTotal(data.total);
          setClientSecret(data.clientSecret);
        });
    } else {
      console.log("EMPTY CART");
    }
  }, [cart]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      console.log("RICHIESTA OK", succeeded);
      Axios.post("http://localhost:5000/complete-payment", {
        uid: user.uid,
        cart: cart,
      }).then((response) => {
        console.log(response);
      });
      history.push("/orders");
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <h1 style={{ paddingBottom: 10 }}>
        {total ? total / 100 + "$" : "Loading..."}
      </h1>
      <CardElement
        id="card-element"
        onChange={handleChange}
        options={cardStyle}
      />
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      {succeeded ? (
        <p>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      ) : (
        <h1>Loading</h1>
      )}
    </form>
  );
};

export default CheckoutForm;
