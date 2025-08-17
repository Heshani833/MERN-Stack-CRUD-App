import axios from "axios";
import React  from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then(() => {
        alert("User registered successfully");
        history("/user-details");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register", {
        name: String(user.name),
        gmail: String(user.gmail),
        password: String(user.password),
      })

      .then((res) => res.data);
  };

  return (
    <div>
      <nav />
      <h1>User Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <br />
        <input
          type="text"
          value={user.name}
          onChange={handleInputChange}
          name="name"
          required
        ></input>
        <br />
        <br />
        <br />
        <label>Gmail</label>
        <br />
        <br />
        <input
          type="text"
          value={user.gmail}
          onChange={handleInputChange}
          name="gmail"
          required
        ></input>
        <br />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <input
          type="password"
          value={user.password}
          onChange={handleInputChange}
          name="password"
          required
        ></input>
        <br />
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
