import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";
const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  //print function
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Print successful!"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  const handleSendReport = () => {
    // Logic to send the report
    const phoneNumber = "+94703065969";
    const message = `selected User Reports`;
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    //open the whatsapp chat in new window
    window.open(WhatsAppUrl, "_blank");
  };

  return (
    <div>
      <Navbar />
      <h1>User Details Display Page</h1>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search by name, email, or any field"
      ></input>

      <button onClick={handleSearch}>Search</button>

      {noResults ? (
        <div>No results found</div>
      ) : (
        <div ref={componentRef}>
          {users &&
            users.map((user, i) => (
              <div key={i}>
                <User user={user} />
              </div>
            ))}
        </div>
      )}
      <button onClick={handlePrint} disabled={users.length === 0}>
        Download Report
      </button>
      <br />
      <br />
      <button onClick={handleSendReport}>Send Report via WhatsApp</button>
    </div>
  );
};

export default UserDetails;
