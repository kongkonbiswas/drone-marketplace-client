import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Route, Switch } from "react-router";
import Sidebar from "../SideBar/SideBar";
import AddServices from "../AddServices/AddServices";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import TopBar from "../TopBar/TopBar";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Review from "../Review/Review";
import BookingList from "../BookingList/BookingList";
import OrderList from "../OrderList/OrderList";
import ManageServices from "../ManageServices/ManageServices";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/admin?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [user]);

  return (
    <div className="row admin">
      <div className="col-sm-3 col-4 dark-bg p-0 text-light">
        <Sidebar></Sidebar>
      </div>
      <div className="col-sm-9 col-8 p-0">
        <TopBar></TopBar>
        <div className="container">
          <Switch>
            <Route exact path="/dashboard/">
              {isAdmin ? <OrderList /> : <BookingList />}
            </Route>
            <Route path="/dashboard/add-orders">
              <AddServices />
            </Route>
            <Route path="/dashboard/make-admin">
              <MakeAdmin />
            </Route>
            <Route path="/dashboard/place-order/:id">
              <PlaceOrder />
            </Route>
            <Route exact path="/dashboard/place-order">
              <PlaceOrder />
            </Route>
            <Route path="/dashboard/review">
              <Review />
            </Route>
            <Route path="/dashboard/orders-list">
              <BookingList />
            </Route>
            <Route path="/dashboard/order-list">
              <OrderList />
            </Route>
            <Route path="/dashboard/manage-orders">
              <ManageServices />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
