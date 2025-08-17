import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = ({ user = {} }) => {
  const { _id, name, gmail, age, address } = user;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then((res) => {
        console.log("User deleted:", res.data);
        window.location.reload(); 
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  return (
    <div>
      <h1>User Display</h1>
      <h2>ID: {_id}</h2>
      <h2>Name: {name}</h2>
      <h2>Gmail: {gmail}</h2>
      <h2>Age: {age}</h2>
      <h2>Address: {address}</h2>
      <Link to={`/user-details/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default User;
