import React from "react";

function Form(props) {
  const { formValues, setFormValues, disabled, validate, formErrors } = props;

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label htmlFor="fname">First Name:</label>
      <input id="fname" type="text" name="fname" value={formValues.fname} onChange={onChange} />
      <label htmlFor="lname">Last Name:</label>
      <input id="lname" type="text" name="lname" value={formValues.lname} onChange={onChange} />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" value={formValues.email} onChange={onChange} />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" value={formValues.password} onChange={onChange} />
      <label htmlFor="terms">Agree To Terms Of Service:</label>
      <input id="terms" type="checkbox" name="termsOfService" value={formValues.termsOfService} onChange={onChange} />
      <button disabled={disabled}>Create User</button>
    </form>
  );
}

export default Form;
