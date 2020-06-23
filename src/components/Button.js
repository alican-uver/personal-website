import React from "react";

const Button = ({name}) => {
  return (
    <>
      <button type="button" className="button">
        {name}
      </button>
    </>
  );
};

export default Button;
