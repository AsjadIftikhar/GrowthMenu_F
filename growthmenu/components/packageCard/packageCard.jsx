import React from "react";
import Image from "next/image";
import Button from "../button/button";
import Check from "../../public/images/check";

const PackageCard = ({
  heading,
  subHeading,
  amount,
  miniLabel,
  features,
  otherFeatures,
  backgroundColor,
  buttonBaclgroundColor,
  buttonTextColor,
  textColor,
  tickColor,
}) => {
  return (
    <div>
      <div className="text-2xl font-semibold text-slate-600">{heading}</div>
      <div className="py-2 text-xs text-slate-400">{subHeading}</div>
      <div className={`p-5 ${backgroundColor || "bg-white"} rounded-2xl`}>
        <div className={`pt-2 pb-1 text-2xl ${textColor} font-bold`}>
          ${amount}
          <span className="text-sm	">/mo</span>
        </div>
        <div className="text-zinc-500 text-xs">{miniLabel}</div>
        <div className="flex">
          <div className="flex flex-col justify-between py-6 pr-10">
            {features.map((feature, index) => (
              <div key={feature + index} className="flex items-center pb-3">
                {/* <Image
                  src="/images/check.svg"
                  width="15px"
                  height="15px"
                  alt=""
                /> */}
                <Check color={tickColor} />

                <span className={`pl-2 ${textColor} text-xs font-semibold`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between py-6">
            {otherFeatures &&
              otherFeatures.map((feature, index) => (
                <div key={index + feature} className="flex items-center pb-3">
                  {/* <Image
                    src="/images/check.svg"
                    width="15px"
                    height="15px"
                    alt=""
                  /> */}
                  <Check color={tickColor} />
                  <span className={`pl-2 ${textColor} text-xs font-semibold`}>
                    Feature label goes here
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="w-48">
          <Button
            buttonText={"Buy Now"}
            backgroundColor={buttonBaclgroundColor}
            textColor={buttonTextColor}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
