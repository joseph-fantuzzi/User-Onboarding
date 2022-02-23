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

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <h1>User Onboarding</h1>
      <Form formValues={formValues} setFormValues={setFormValues} disabled={disabled} validate={validate} formErrors={formErrors} />
    </div>
  );
}

export default App;
