import React, { useState } from "react";

const Book = (props) => {
  const img = "https://m.media-amazon.com/images/I/71ykofulttL._AC_UY218_.jpg";

  const [count, setCount] = useState(0);

  const countMe = function () {
    return () => setCount(count + 1);
  };

  return (
    <div className="Book">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <h1 className="title">
        The Everything Store: Jeff Bezos and the Age of Amazon
      </h1>
      <p className="author">Brad Stone</p>
      <p>{count}</p>
      <button onClick={countMe()}>Click me</button>
    </div>
  );
};

export default Book;
