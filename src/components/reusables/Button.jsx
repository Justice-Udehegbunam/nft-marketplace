import React from "react";

const Button = ({ className, text }) => {
  return (
    <button
      className={`py-2 px-6 text-[16px] rounded-xl ${
        className || ""
      } hover:opacity-80`}
    >
      {text}
    </button>
  );
};

export default Button;
