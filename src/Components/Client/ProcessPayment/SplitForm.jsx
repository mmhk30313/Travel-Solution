import React, { useMemo, useRef } from "react";
import './ProcessPayment.css';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./useResponsiveFontSize";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const nameRef = useRef();
  const emailRef = useRef();
  const officeRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log( payload," ", event.target.name.value," ", event.target.email.value, " ", event.target.office.value);
    // nameRef.current.value = null;
    // emailRef.current.value = null;
    // officeRef.current.value = null;
  };

  return (
    <form className="form py-3 payment-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-12">
          <label >Name</label>
          <input ref={nameRef} name="name" className="form-control" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group col-md-12">
          <label>Email</label>
          <input ref={emailRef} type="email" name="email" placeholder="Your email" className="form-control"/>
        </div>
        <div className="form-group col-md-12">
          <label>Office Name</label>
          <input ref={officeRef} type="text" name="office" placeholder="Your office" className="form-control"/>
        </div>
        <div className="form-group col-md-12">
          <label>Card number</label>
          <CardNumberElement
              className="form-control"
              options={options}
              
          />
        </div>
        <div className="form-group col-md-6">
        <label>Expiration date</label>
          <CardExpiryElement
            className="form-control "
            options={options}
          />
        </div>
        <div className="form-group col-md-6">
          <label>CVC</label>
          <CardCvcElement
            className="form-control"
            options={options}
            
          />
        </div>
        <div className="col-md-8 my-auto">
          <p className="font-weight-bold service-charge my-auto pb-2"><small>Your service charged will be <b className="text-warning">$1000</b></small></p>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <button type="submit" className="btn btn-brand w-100" disabled={!stripe}>Pay</button>
        </div>
      </div>
    </form>
  );
};

export default SplitForm;
