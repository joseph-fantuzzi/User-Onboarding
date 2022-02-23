import React from "react";

function User(props) {
  const { user } = props;

  return (
    <div className="user-container">
      <h2>{`${user.fname} ${user.lname}`}</h2>
      <h3>{user.email}</h3>
      <p>{user.termsOfService === true ? "Agreed To Terms Of Service" : "Did Not Agree To Terms Of Service"}</p>
      <p>{user.createdAt}</p>
    </div>
  );
}

export default User;
