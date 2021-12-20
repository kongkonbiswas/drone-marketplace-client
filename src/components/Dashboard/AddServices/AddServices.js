import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import uploadIcon from "../../../images/cloud-upload-outline 1.png";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const newService = {
      serviceTitle: data.serviceTitle,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    };
    console.log(newService);
    fetch(`http://localhost:5000/addService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        data && alert("New Service's Information Added Successfully");
      });
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "30d19df110f035fdee5ea027e566847c");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="m-4 pt-4">
        <form className="mx-5 pe-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-4">
            <div className="col-sm-6 col-12">
              <label className="form-label" htmlFor="serviceTitle">
                <b>Product Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Title"
                {...register("serviceTitle", { required: true })}
              />
              {errors.serviceTitle && (
                <small className="text-danger">Product name is required</small>
              )}
            </div>
            <div className="col-sm-6 col-12">
              <label className="form-label" htmlFor="price">
                <b>Product Price</b>
              </label>
              <input
                name="price"
                type="text"
                className="form-control"
                placeholder="Enter Service Charge"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <small className="text-danger">Price is required</small>
              )}
            </div>
            <div className="col-sm-6 col-12">
              <label className="form-label" htmlFor="description">
                <b>Description</b>
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Write Description"
                {...register("description", { required: true })}
                cols="20"
                rows="5"
              ></textarea>
              {errors.description && (
                <small className="text-danger">Description is required</small>
              )}
            </div>
            <div className="col-sm-6 col-12">
              <label className="form-label d-block">
                <b>Add a Photo</b>
              </label>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => document.getElementById("image-upload").click()}
              >
                <img src={uploadIcon} className="icon" alt="" /> Upload Picture
              </button>
              <input
                type="file"
                id="image-upload"
                className="form-control"
                hidden
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="d-flex mt-4 justify-content-end">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
