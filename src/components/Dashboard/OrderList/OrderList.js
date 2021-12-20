import React, { useEffect, useState } from "react";
import TableData from "../TableData/TableData";
import "./OrderList.css";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    setOrderList([]);
    const url = "http://localhost:5000/allOrder";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Product</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <TableData key={order._id} order={order}></TableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
