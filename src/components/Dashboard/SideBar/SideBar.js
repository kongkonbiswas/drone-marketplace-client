import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faList,
  faPlus,
  faThLarge,
  faShoppingCart,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState({});
  const { user, logout } = useAuth();
  useEffect(() => {
    fetch(
      "https://arcane-brushlands-82078.herokuapp.com/admin?email=" + user.email
    )
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [user]);

  return (
    <div className="side-bar">
      <Link className="navbar-brand text-center" to="/">
        <div className="my-3">
          <h3 className="m-0 brand-color website-name">DRONESHOP</h3>
          <small className="business text-white">DRONESHOP SEEL SERVICE</small>
        </div>
      </Link>
      {isAdmin ? (
        <div>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to={"/dashboard/order-list"}
          >
            <FontAwesomeIcon icon={faList} className=" icon" />
            <h6>&nbsp; Order List</h6>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to="/dashboard/add-orders"
          >
            <FontAwesomeIcon icon={faPlus} className=" icon" />
            <h6>&nbsp; Add Product</h6>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to="/dashboard/make-admin"
          >
            <FontAwesomeIcon icon={faUserPlus} className=" icon" />
            <h6>&nbsp; Make Admin</h6>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to="/dashboard/manage-orders"
          >
            <FontAwesomeIcon icon={faThLarge} className=" icon" />
            <h6>&nbsp; Manage Product</h6>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to="/dashboard/place-order"
          >
            <FontAwesomeIcon icon={faShoppingCart} className=" icon" />
            <h6>&nbsp; Place Order</h6>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to="/dashboard/orders-list"
          >
            <FontAwesomeIcon icon={faList} className=" icon" />
            <h6>&nbsp; Orders List</h6>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="admin-option d-flex px-3 px-sm-5 py-3"
            to="/dashboard/review"
          >
            <FontAwesomeIcon icon={faCommentAlt} className=" icon" />
            <h6>&nbsp; Review</h6>
          </NavLink>
        </div>
      )}

      <Button
        onClick={logout}
        className="admin-option d-flex px-3 px-sm-5 py-3"
        variant="primary"
        type="submit"
      >
        logout
      </Button>
    </div>
  );
};

export default Sidebar;
