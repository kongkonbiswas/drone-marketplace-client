import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router";
import SimpleCardForm from "./SimpleCardForm";
import "./PlaceOrder.css";
import useAuth from "../../../hooks/useAuth";

const stripePromise = loadStripe(
  "pk_test_51Jw9oWKd2uEs6nhLplPPbFlgCXlSZVwWeM9vt2flkvaHHwrVGVa9TSq7DpQxArO2HebNRVc8AOFHLFzDLROnCaYa009lVir19B"
);

const PlaceOrder = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  let { id } = useParams();

  const handlePayment = (paymentId) => {
    delete service._id;
    const orderDetails = {
      ...service,
      ...user,
      paymentId,
      orderTime: new Date(),
      status: "Pending",
    };
    console.log(orderDetails);

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Placed Successfully");
        }
      });
  };

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div className="place-order mt-5">
      <div className="col-sm-6 my-4  col-12">
        <input
          type="text"
          className="form-control"
          defaultValue={user.displayName}
          placeholder="Your Name"
        />
      </div>
      <div className="col-sm-6 my-4  col-12">
        <input
          type="email"
          className="form-control"
          defaultValue={user.email}
          placeholder="Enter Email"
        />
      </div>
      <div className="col-sm-6  my-4 col-12">
        <input
          type="text"
          className="form-control"
          defaultValue={service.serviceTitle}
          placeholder="Select a service from our exciting services"
        />
      </div>
      <div className="col-sm-6  my-4 col-12">
        <Elements stripe={stripePromise}>
          <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
        {service.price ? (
          <p className="mt-3">Your service charge will be ${service.price}</p>
        ) : null}
      </div>
    </div>
  );
};

export default PlaceOrder;
