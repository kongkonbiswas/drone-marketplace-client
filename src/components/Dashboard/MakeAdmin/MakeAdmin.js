import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (email) => {
    const url = `https://arcane-brushlands-82078.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        data && alert("New Admin Added Successfully");
      });
  };
  return (
    <div>
      <h4 className="m-4">Make Admin</h4>
      <div className="m-4 pt-4">
        <form className="mx-5 pe-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-4">
            <div className="col-sm-6 col-12">
              <label className="form-label" htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-danger">Email is required</small>
              )}
            </div>
          </div>
          <div className="mt-4 ">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
