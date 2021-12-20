import React from "react";

const TableData = ({ order }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    order.status = e.target.value;
    console.log(order);
    fetch(`http://localhost:5000/update/${order._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((result) => result.json())
      .then((ok) => console.log("ok"));
  };
  return (
    <tr>
      <td>{order.displayName}</td>
      <td>{order.email}</td>
      <td>{order.serviceTitle}</td>
      <td>
        <select
          onChange={handleChange}
          className="form-select"
          aria-label="Default select example"
        >
          <option selected value="Pending">
            {order.status}
          </option>
          <option value="Approved">Approved</option>
          <option value="Cancel">Cancel</option>
          <option value="Shipped">Shipped</option>
        </select>
      </td>
    </tr>
  );
};

export default TableData;
