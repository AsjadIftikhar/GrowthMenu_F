import React from "react";

const Button = ({ textColor, backgroundColor, buttonText, onClick }) => {
  return (
    <div>
      <button
        type="button"
        className={`${textColor} ${backgroundColor}  font-medium rounded-xl text-sm px-5 w-full py-2.5 text-center mr-2 mb-2 drop-shadow-xl `}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
