import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    const url = "http://localhost:5000/allService";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        {!services.length && (
          <div class="spinner-border text-center text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="row">
        {services?.map((pd) => (
          <div className="col-md-4 col-12 my-4">
            <div className="card service-card">
              <div className="card-image">
                <img src={pd?.imageURL} alt="" className="img-fluid" />
                <div className="service-charge d-flex justify-content-center align-items-center">
                  ${pd?.price}
                </div>
              </div>
              <div className="p-4 d-flex">
                <h6>{pd?.serviceTitle}</h6>
              </div>
              <button
                onClick={() => {
                  if (window.confirm("Are you sure to delete this record?")) {
                    handleDelete(pd?._id);
                  }
                }}
                className="btn btn-success"
              >
                {" "}
                Delete Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
