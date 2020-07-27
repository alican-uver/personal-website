import React from "react";

const Button = ({ name, loadMore, remainingProjects }) => {
  return (
    <>
      <button className="button text-capitalize" onClick={loadMore || null}>
        {name}
        {remainingProjects && (
          <span className="button-badge"> {remainingProjects}</span>
        )}
      </button>
    </>
  );
};

export default Button;
