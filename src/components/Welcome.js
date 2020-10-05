import React from "react";

function Welcome(prop) {
  return (
    <div className="box">
      <button onClick={prop.handleLogout}>Log out</button>
    </div>
  );
}

export default Welcome;
