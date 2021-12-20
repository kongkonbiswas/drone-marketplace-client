import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./TopBar.css";
import useAuth from "../../../hooks/useAuth";

const TopBar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(
      "https://arcane-brushlands-82078.herokuapp.com/admin?email=" + user.email
    )
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [user]);

  return (
    <nav class="topBar navbar navbar-expand-lg dark-bg">
      <div class="container">
        <ul class="navbar-nav d-flex justify-content-between">
          {
            <li className="nav-item me-5">
              {location.pathname === "/dashboard" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/order-list"
                >
                  {isAdmin ? <b>Order List</b> : <b>Orders List</b>}
                </Link>
              )}
              {location.pathname === "/dashboard/order-list" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/order-list"
                >
                  <b>Order List</b>
                </Link>
              )}
              {location.pathname === "/dashboard/add-orders" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/add-orders"
                >
                  <b>Add Product</b>
                </Link>
              )}
              {location.pathname === "/dashboard/make-admin" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/make-admin"
                >
                  <b>Make Admin</b>
                </Link>
              )}
              {location.pathname === "/dashboard/manage-orders" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/manage-orders"
                >
                  <b>Manage Product</b>
                </Link>
              )}
              {location.pathname.slice(0, 22) === "/dashboard/place-order" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/place-order"
                >
                  <b>Place Order</b>
                </Link>
              )}
              {location.pathname === "/dashboard/review" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/review"
                >
                  <b>Review</b>
                </Link>
              )}
              {location.pathname === "/dashboard/orders-list" && (
                <Link
                  className="nav-link mt-1 page-title"
                  to="/dashboard/orders-list"
                >
                  <b>Orders List</b>
                </Link>
              )}
            </li>
          }
          {user?.email && (
            <p className="mt-3 text-success text-uppercase">
              <b>{user.displayName}</b>
            </p>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
