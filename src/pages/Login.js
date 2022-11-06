import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../Layout";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [isLoggedIn, userInfo, meToggle] = useContext(AuthContext);

  const [inputs, setInputs] = useState(initialState);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs(initialState);
    meToggle();
    navigate("/contacts");
  };

  return (
    <div className="main-container">
      <form
        onSubmit={submitHandler}
        className="form-container"
        autoComplete="on"
      >
        <h2 className="form-header">Sign In</h2>
        <div className="input-div">
          <div className="email_input_div">
            <label htmlFor="email"></label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={changeHandler}
              value={inputs.email}
              placeholder="E-mail"
              autoComplete="on"
            />
          </div>
          <div className="password_input_div">
            <label htmlFor="password"></label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={changeHandler}
              value={inputs.password}
              placeholder="Password"
              autoComplete="on"
            />
          </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
