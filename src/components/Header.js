import React, { useState } from "react";

const Header = (props) => {
  const img = "https://i.ytimg.com/vi/neI07aVL9IE/maxresdefault.jpg";

  const [count, setCount] = useState(0);

  const countMe = function () {
    return () => setCount(count + 1);
  };

  return (
    <div className="Header">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <h1 className="title">Welcome to my Book store!</h1>
    </div>
  );
};

export default Header;
