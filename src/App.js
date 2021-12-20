import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/register";
import NavBar from "./components/Home/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AuthProvider from "./context/AuthProvider";
import PrivetRoute from "./components/Login/PrivetRoute";
import Explore from "./components/Home/Explore/Explore";
import NotFound from "./components/Home/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <NavBar></NavBar>
            <Login />
          </Route>
          <Route path="/register">
            <NavBar></NavBar>
            <Register />
          </Route>
          <PrivetRoute path="/dashboard">
            <Dashboard />
          </PrivetRoute>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
