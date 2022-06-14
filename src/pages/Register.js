import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const { name, email, password, repassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== repassword) {
      toast.error("passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        repassword,
      };
      dispatch(register(userData));
    }
  };

  return (
    <div>
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
      <section>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="enter your name"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="enter your email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="enter your password"
            />
          </div>
          <div>
            <input
              type="password"
              id="repassword"
              name="repassword"
              value={repassword}
              onChange={onChange}
              placeholder="repeat password"
            />
          </div>
          <div>
            {isLoading ? <p>LOADING</p> : <button type="submit">submit</button>}
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
