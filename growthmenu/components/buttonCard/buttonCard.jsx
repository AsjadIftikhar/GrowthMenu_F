import React from "react";
import Image from "next/image";

const COLORS = [
    "ExtraLightBlue",
    "LightPink",
    "ExtraLightYellow",
    "LightOrange",
    "LightIndigo",
    "LightGreen",
]

const ButtonCard = ({icon, text, backgroundColor, onClick}) => {

        const index = Math.floor(Math.random() * 6);
        const logo_color = COLORS[index]

        const handleClick = (e) => {
            const url = "/order/" + text.replace(" ", "-")
            onClick(url)
        }
        return (
            <div
                className={`w-full flex flex-col ${backgroundColor} items-center justify-center py-5
                rounded-lg drop-shadow 
                hover:bg-DarkBlue hover:text-white`}
                onClick={handleClick}>
                <div className={`flex justify-center p-4 bg-${logo_color} items-center mb-4 rounded-full`}>
                    {icon}
                </div>
                <div className="font-medium pr-4">{text}</div>
            </div>
        );
    }
;

export default ButtonCard;
