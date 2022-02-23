import React from "react";
import "./User.css";

function User(props) {
  const { user } = props;

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="user-items">
      <h2>{`${user.fname} ${user.lname}`}</h2>
      <h3>{user.email}</h3>
      <p>{user.termsOfService === true ? "Agreed To Terms Of Service" : "Did Not Agree To Terms Of Service"}</p>
      <p>{`User created at: ${user.createdAt}`}</p>
    </div>
  );
}

export default User;
