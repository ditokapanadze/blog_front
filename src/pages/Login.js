import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { Formik, Form, ErrorMessage } from "formik";
import validateLogin from "../validations/loginValidations";
import Spinner from "../components/Spinnr";

function Login() {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  //   dispatch(reset());
  // }, [user, navigate, dispatch]);
  const submit = (e) => {
    const userDate = {
      email: e.email,
      password: e.password,
    };

    dispatch(login(userDate));
  };
  const revealPass = () => {
    setShowPass(!showPass);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validateLogin}
      onSubmit={(data) => {
        submit(data);
      }}
    >
      {(formik) => (
        <div className="h-screen	flex items-center justify-center">
          <div className="w-full max-w-xs">
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
              <Input
                label="Email"
                placeholder="Email"
                type="Email"
                id="email"
                name="email"
              />{" "}
              <Input
                label="password"
                placeholder="password"
                type={showPass ? "text" : "password"}
                showPass={showPass}
                id="password"
                revealpass={revealPass}
                name="password"
              />{" "}
              <p className="text-red-500 text-xs italic mb-2 ">{message}</p>
              <div class="flex items-center justify-between ">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                )}

                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </Form>
            <p className="text-center font-bold text-gray-500 text-m">
              Don't have an account?{" "}
              <span className="text-red-500 font-bold">
                {" "}
                <Link to="/register">Register now!</Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Login;
