import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetails = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  //print function
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Print successful!"),
  });

  return (
    <div>
      <Navbar />
      <h1>User Details Display Page</h1>
      <div ref={ComponentsRef}>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
      <button onClick={handlePrint}>Print Users</button>

    </div>
  );
};

export default UserDetails;
