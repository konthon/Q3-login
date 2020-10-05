import React from "react";

function Login(prop) {
  return (
    <div className="box">
      <form onSubmit={prop.handleSubmit}>
        <label>
          username:{" "}
          <input
            value={prop.username}
            onChange={prop.handleUsernameChange}
            type="username"
            autoComplete="off"
          />
        </label>
        <br />
        <label>
          password:{" "}
          <input
            value={prop.password}
            onChange={prop.handlePasswordChange}
            type="password"
          />
        </label>
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <div className="message">{prop.message}</div>
    </div>
  );
}

export default Login;
