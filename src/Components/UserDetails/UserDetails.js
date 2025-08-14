import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import AddUser from "../AddUser/AddUser";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetails = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>User Details Display Page</h1>
      <div>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <AddUser user={user} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserDetails;
