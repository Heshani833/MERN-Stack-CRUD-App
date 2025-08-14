import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  return (
    <>
      <Navbar />
      <div>AddUser</div>
      <form>
      <label>name</label>
      <br/>
      <input type="text" name="name" value={inputs.name} required></input>
      <br/><br/>
      <label>Gmail</label>
      <br/>
      <input type="email" name="gmail" value={inputs.gmail} required></input>
      <br/><br/>
      <label>Age</label>
      <br/>
      <input type="number" name="age" value={inputs.age} required></input>
      <br/><br/>
      <label>Address</label>
      <br/>
      <input type="text" name="address" value={inputs.address} required></input>
      <br/><br/>
      <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
