import React from "react";

const ButtonCard = ({icon, text, backgroundColor, onClick}) => {

        const handleClick = () => {
            const url = "/order/" + text.replace(" ", "-")
            onClick(url)
        }

        return (
            <div className=" w-full flex flex-col bg-Grey items-center justify-center rounded-lg py-5 hover:bg-LightBlue"
                 onClick={handleClick}>
                <div className={`h-10 w-10 flex justify-center items-center mb-2  ${backgroundColor} rounded-full`}>
                    {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          
        </svg> */}
                    {icon}
                </div>
                <div className="text-xs font-medium">{text}</div>
            </div>
        );
    }
;

export default ButtonCard;
