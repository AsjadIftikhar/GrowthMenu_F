import React from "react";
import PackageCard from "../../components/packageCard/packageCard";
import TextIconCard from "../../components/textIconCard/textIconCard";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"
const features = [
  "Feature Label goes here",
  "Feature Label goes here",
  "Feature Label goes here",
];
const Package = () => {
  return (
    <React.Fragment>
      <div className="h-screen bg-LightGrey p-8 flex">
        <div>
          <SideBar/>
        </div>
        <div className="pl-10 w-full">
          <TopBar/>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-semibold pt-3 ">Choose Package</div>
              <div className=" font-normal	text-zinc-500 py-2">
                Select pre defined packages or make new for yourself
              </div>
            </div>
            <TextIconCard />
          </div>
          <div className="h-2/4 flex ">
            <div className="w-2/5 pr-5">
              <PackageCard
                heading="Basic"
                subHeading="Limitless Possibilities"
                amount={5}
                buttonTextColor="text-DarkBlue"
                tickColor="DarkIndigo"
                buttonBaclgroundColor="bg-LightBlue_2"
                miniLabel="Try it as long as you like"
                features={features}
              />
            </div>
            <div className="w-3/6">
              <PackageCard
                heading="Premium"
                subHeading="Limitless Possibilities"
                amount={5}
                textColor="text-white"
                backgroundColor="bg-DarkBlue"
                buttonTextColor="text-DarkBlue"
                tickColor="#fff"
                buttonBaclgroundColor="bg-white"
                miniLabel="Try it as long as you like"
                features={features}
                otherFeatures={features}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Package;
