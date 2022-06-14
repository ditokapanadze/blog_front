import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  console.log(formData);
  return (
    <div>
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Login</p>
      <section>
        <form onSubmit={onSubmit}>
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
            <button type="submit">submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
