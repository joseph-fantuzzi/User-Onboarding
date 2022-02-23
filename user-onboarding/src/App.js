import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "./Validation/schema";
import Form from "./Components/Form";
import User from "./Components/User";
import "./App.css";

const initialForm = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormErrors = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const submit = () => {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };

    setFormValues(initialForm);

    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <h1>User Onboarding</h1>
      <Form formValues={formValues} setFormValues={setFormValues} disabled={disabled} validate={validate} formErrors={formErrors} submit={submit} />
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;
