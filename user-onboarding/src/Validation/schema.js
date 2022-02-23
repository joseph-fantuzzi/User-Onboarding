import * as yup from "yup";

const schema = yup.object().shape({
  fname: yup.string().required("First name is required."),
  lname: yup.string().required("Last name is required."),
  email: yup.string().email("Must be a valid email address").required("An email is required."),
  password: yup.string().required("A password is required.").min(6, "Password must be at least 6 characters."),
  termsOfService: yup.boolean(),
});

export default schema;
