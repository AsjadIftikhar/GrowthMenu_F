import React from "react";
import Link from "next/link";


const ButtonCard = ({icon, id, title, backgroundColor}) => {
        return (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={{
                pathname: "/order/service",
                query: {id: id}
            }}>
                <div
                    className={`w-full flex flex-col ${backgroundColor} items-center justify-center py-5
                rounded-lg drop-shadow 
                hover:bg-DarkBlue hover:text-white`}
                    // onClick={handleClick}
                >
                    <div className={`flex justify-center p-4 bg-ExtraLightBlue items-center mb-4 rounded-full`}>
                        {icon}
                    </div>
                    <div className="font-medium pr-4">{title}</div>
                </div>
            </Link>
        );
    }
;

export default ButtonCard;
