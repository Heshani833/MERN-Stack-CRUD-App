import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import UserDetails from "./Components/UserDetails/UserDetails";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/user-details" element={<UserDetails/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
