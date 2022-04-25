import React from "react";
import Image from "next/image";
const TextIconCard = () => {
  return (
    <div className="w-48 h-10 py-2 pl-4 pr-8 bg-white rounded-lg flex  justify-between items-center">
      <div className="h-6 pl-0.5 w-6 bg-DarkBlue flex items-center justify-between  rounded-lg">
        <Image src="/images/emailIcon.svg" alt="" height="20px" width="20px" />
      </div>
      <span className="text-sm font-medium text-DarkBlue">
        Chat with seller
      </span>
    </div>
  );
};

export default TextIconCard;
