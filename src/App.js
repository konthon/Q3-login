import React, { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Welcome from "./components/Welcome";

var bcrypt = require("bcryptjs");
// const saltRound = 5;
const hashed = "$2a$05$xo51gzu9MmPKtdFnVWBXxuavSLn1sBjwKO9x44gXH7QPDOfB5u88.";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setMessage("Please input username and password");
    } else if (username !== "" && password === "") {
      setMessage("Please input password");
    } else {
      bcrypt.compare(password, hashed, function (err, result) {
        if (result) {
          // console.log("It matches!");
          setIsLoggedIn(true);
        } else {
          // console.log("Invalid password!");
          setMessage("Wrong username and/or password");
        }
      });
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setMessage("");
    setIsLoggedIn(false);
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="App">
      <h1>{isLoggedIn ? `Welcome ${username}` : "Log in"}</h1>
      {isLoggedIn ? (
        <Welcome handleLogout={handleLogout} />
      ) : (
        <Login
          username={username}
          password={password}
          handleSubmit={handleSubmit}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          message={message}
        />
      )}
    </div>
  );
}

export default App;
