import * as Yup from "yup";

const validateRegister = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is  required"),
  repassword: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Password is  required"),
  name: Yup.string().required("Username is required"),
});

export default validateRegister;
