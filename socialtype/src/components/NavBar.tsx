import React, { useState } from "react";

const NavBar = () => {
  const [hello, sethello] = useState<string | null>("testing");

  const testing = () => {
    sethello("new value");
  };

  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>{hello}</li>
        <button onClick={testing}> click here </button>
      </ul>
    </div>
  );
};

export default NavBar;
