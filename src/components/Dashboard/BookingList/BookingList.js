import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const BookingList = () => {
  const { user } = useAuth();
  const [bookingList, setBookingList] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    setBookingList([]);
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delteOrder/${id}`, {
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
        {!bookingList.length && (
          <div>
            <h2>You have not order any of our service</h2>
          </div>
        )}
      </div>
      <div className="row">
        {bookingList?.map((pd) => (
          <div className="col-md-4 col-12 my-4">
            <div className="card service-card">
              <div className="card-image">
                <img src={pd?.imageURL} alt="" className="img-fluid" />
                <div
                  className={`service-status d-flex justify-content-center align-items-center color-${pd?.status}`}
                >
                  {pd?.status}
                </div>
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

export default BookingList;
