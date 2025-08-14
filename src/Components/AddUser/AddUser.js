import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/user-details"));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      age: Number(inputs.age),
      address: String(inputs.address),
    });
  };

  return (
    <>
      <Navbar />
      <div>AddUser</div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        ></input>
        <br />
        <br />
        <label>Gmail</label>
        <br />
        <input
          type="email"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail}
          required
        ></input>
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={inputs.age}
          required
        ></input>
        <br />
        <br />
        <label>Address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        ></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUser;
