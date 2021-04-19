import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import './ProcessPayment.css';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import Modal from 'react-bootstrap/Modal';

import useResponsiveFontSize from "./useResponsiveFontSize";
import visa from '../../../images/Icon/card-visa.png';
import paypal from '../../../images/Icon/card-paypal.png';
import { useParams } from "react-router";
import { UserContext } from "../../../App";

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
  const [loggedInUser] = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);
  const [clientService, setClientService] = useState({});
  const [addedClientService, setAddedClientService] = useState({});
  const {id} = useParams();
  
  useEffect(() =>{
    if(id !== "booking"){
      fetch(`http://localhost:5000/client-one-service/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setClientService(data);
      })
    }
  },[id])
  // console.log(id, clientService);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const nameRef = useRef();
  const emailRef = useRef();
  const officeRef = useRef();
  const [cardType, setCardType] = useState("Visa Card");
  // const [wrongMessage, setWrongMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // console.log("Mahadi2")

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    // console.log(clientService, id);
    if(clientService._id === id){
      console.log( payload.paymentMethod," ", event.target.name.value," ", event.target.email.value, " ", event.target.office.value, " ", cardType);
      if(payload.paymentMethod){
        const clientServiceDetails = {
          email: loggedInUser.email,
          paymentEmail: event.target.email.value,
          setName: event.target.name.value,
          office: event.target.office.value,
          cardType: cardType,
          status: "Pending",
          name: clientService.name,
          serviceName: clientService.serviceName,
          price: clientService.price,
          description: clientService.description,
          photoURL: clientService.imgUrl
        }
        fetch('http://localhost:5000/client-services', {
          method: 'POST',
          body: JSON.stringify(clientServiceDetails),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setAddedClientService(data);
          setModalShow(true);
          nameRef.current.value = null;
          emailRef.current.value = null;
          officeRef.current.value = null;

        })
      }
    }
    else{
      // console.log("Sorry!!! You didn't select any service for you");
      alert("Sorry!!! You didn't select any service for you");
      // setWrongMessage("Sorry!!! You didn't select any service for you");
    }
    
  };
  const handleChange =(type)=>{
    // console.log(type);
    setCardType(type);
  }
  // console.log(cardType);
  return (
    <form className="form payment-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-12">
          <label >Name</label>
          <input ref={nameRef} name="name" className="form-control" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group col-md-12">
          <label>Email</label>
          <input ref={emailRef} type="email" name="email" placeholder="Your email" className="form-control" required/>
        </div>
        <div className="form-group col-md-12">
          <label>Office Name</label>
          <input ref={officeRef} type="text" name="office" placeholder="Your office" className="form-control" required/>
        </div>
        
        <div className="form-group col-md-12">
          <label>Pay With</label><br/>
          <div className="form-check form-check-inline">
            <input onChange={()=>handleChange('Visa Card')} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Visa Card" required defaultChecked/>
            <label style={{cursor: 'pointer'}} className="form-check-label ml-2" htmlFor="inlineRadio1"><img style={{height: '25px'}} src={visa} alt=""/><span> Visa Card</span></label>
          </div>
          <div className="form-check form-check-inline ml-3">
            <input onChange={()=>handleChange('Paypal')} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Paypal" />
            <label style={{cursor: 'pointer'}} className="form-check-label ml-2" htmlFor="inlineRadio2"><img style={{height: '25px'}} src={paypal} alt=""/><span> Paypal</span></label>
          </div>
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
          <p className="font-weight-bold service-charge my-auto pb-2"><small>Your service charged will be <b className="text-warning">${clientService.price}</b></small></p>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <button type="submit" className="btn btn-brand w-100" disabled={!stripe}>Pay</button>
          <MyVerticallyCenteredModal
              addedClientService={addedClientService}
              user={loggedInUser}
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </form>
  );
};

function MyVerticallyCenteredModal(props) {
  const addedClientService = props.addedClientService;
  // const {user} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
          <div className="">
              <p className="">WELCOME!!!</p>
              <p>{addedClientService.name}</p>
          </div>
          <p className="text-warning">YOUR SERVICE IS BOOKED</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row justify-content-around align-items-center mx-auto">
            <div className="details col-md-8 align-items-center">
                <h5>Service Title: {addedClientService.serviceName}</h5>
                <h6>Price: <span className="text-warning">${addedClientService.price}</span></h6>
                <p className="font-weight-bold">Card Type: <span className="text-success">{addedClientService.cardType}</span></p>
                <div style={{width: 'fit-content'}} className="card p-2 mt-1 bg-light text-light">
                  <p className="text-danger mt-2">{addedClientService.status}</p>
                </div>
            </div>
            <div className="image col-md-4 text-right">
                <img className="img-fluid w-" src={addedClientService.photoURL} alt=""/>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-outline-info" onClick={props.onHide}>Back</button>
      </Modal.Footer>
    </Modal>
  );
}
export default SplitForm;
