import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

import { FaSignInAlt } from "react-icons/fa";

import Input from "../components/Input";
import { Formik, Form, ErrorMessage } from "formik";
import validateRegister from "../validations/registerValidation";

function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showRepass, setShowRepass] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, navigate, dispatch]);

  const revealPass = () => {
    setShowPass(!showPass);
  };
  const revealRepass = () => {
    setShowRepass(!showRepass);
  };
  const submit = (e) => {
    const userDate = {
      email: e.email,
      password: e.password,
      name: e.name,
      repassword: e.repassword,
    };

    dispatch(register(userDate));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", repassword: "", name: "" }}
      validationSchema={validateRegister}
      onSubmit={(data) => {
        submit(data);
      }}
    >
      {(formik) => (
        <div className="h-screen	flex items-center justify-center">
          <div class="w-full max-w-xs">
            <Form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
              <Input
                label="Email"
                placeholder="Email"
                type="Email"
                name="email"
              />{" "}
              <p className="text-red-500 text-xs italic mb-2 ">{message}</p>
              <Input
                label="User name"
                placeholder="user name"
                type="texts"
                id="name"
                name="name"
              />
              <Input
                label="password"
                placeholder="password"
                type={showPass ? "text" : "password"}
                showPass={showPass}
                id="password"
                revealpass={revealPass}
                name="password"
              />
              <Input
                label="repeat password"
                placeholder="password"
                type={showRepass ? "text" : "password"}
                showRepass={showRepass}
                id="repassword"
                revealrepass={revealRepass}
                name="repassword"
              />
              <div class="flex items-center justify-between ">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </Form>
            <p class="text-center font-bold text-gray-500 text-m">
              Already have an account?{" "}
              <span className="text-red-500 font-bold">
                {" "}
                <Link to="/login">Sign in!</Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Register;
