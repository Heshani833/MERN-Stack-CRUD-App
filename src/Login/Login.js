import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "", // Add password to initial state
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("User logged in successfully");
        history("/user-details");
      } else {
        alert("Login failed, please check your credentials");
      }
    } catch (err) {
      alert("error: " + err.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        gmail: user.gmail,
        password: user.password,
      })

      .then((res) => res.data);
  };

  return (
    <div>
      <Navbar />
      <h1>User Login</h1>
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
