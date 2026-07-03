import React from "react";

const Divider = ({ className = "" }) => {
  return (
    <hr
      className={`border-gray-200 ${className}`}
    />
  );
};

export default Divider;