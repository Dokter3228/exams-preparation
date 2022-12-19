import React from "react";

const MyInput = ({ value, setValue, placeholder }) => {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default MyInput;
