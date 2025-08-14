import React from "react";

const User = (props) => {

  const {_id, name, gmail, age, address} = props.user;

  return (
    <div>
      <h1> User Display</h1>
    </div>
  );
};

export default User;
