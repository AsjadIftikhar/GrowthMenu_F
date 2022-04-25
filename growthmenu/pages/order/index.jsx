import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import ButtonCard from "../../components/buttonCard/buttonCard";

const NewOrder = () => {
    const router = useRouter();
    return (
        <React.Fragment>
            <div className="text-2xl font-semibold pt-3 ">Create A New Order</div>
            <div className=" font-normal	text-zinc-500 py-2">
                Select your category to create an order
            </div>
            <div className="w-3/4 flex justify-around gap-4 bg-white pt-10 p-8 px-16">
                <div className="w-44">
                    <ButtonCard
                        backgroundColor="bg-LightPink"
                        icon={
                            <Image
                                src="/images/product.svg"
                                alt=""
                                height="20px"
                                width="20px"
                            />
                        }
                        text="Product Descriptions"
                        onClick={url => {
                            router.push(url);
                        }}
                    />
                </div>
                <div className="w-44">
                    <ButtonCard
                        backgroundColor="bg-LightBlue"
                        icon={
                            <Image src="/images/blog.svg" alt="" height="20px" width="20px"/>
                        }
                        text="Blogs & Articles"
                        onClick={url => {
                            router.push(url);
                        }}
                    />
                </div>
                <div className="w-44">
                    <ButtonCard
                        backgroundColor="bg-Yellow_1"
                        icon={
                            <Image
                                src="/images/emailMarketing.svg"
                                alt=""
                                height="20px"
                                width="20px"
                            />
                        }
                        text="Email Marketing"
                        onClick={url => {
                            router.push(url);
                        }}
                    />
                </div>
            </div>
            <div className="w-3/4 flex justify-around gap-4 bg-white pb-10 px-16">
                <div className="w-44">
                    <ButtonCard
                        backgroundColor="bg-LightGreen"
                        icon={
                            <Image src="/images/ad.svg" alt="" height="20px" width="20px"/>
                        }
                        text="Ad Copy"
                        onClick={url => {
                            router.push(url);
                        }}
                    />
                </div>
                <div className="w-44">
                    <ButtonCard
                        backgroundColor="bg-LightIndigo"
                        icon={
                            <Image
                                src="/images/globe.svg"
                                alt=""
                                height="20px"
                                width="20px"
                            />
                        }
                        text="Web Copy"
                        onClick={url => {
                            router.push(url);
                        }}
                    />
                </div>
                <div className="w-44">
                    <ButtonCard
                        backgroundColor="bg-LightOrange"
                        icon={
                            <Image
                                src="/images/video.svg"
                                alt=""
                                height="20px"
                                width="20px"
                            />
                        }
                        text="Video Scripts"
                        onClick={url => {
                            router.push(url);
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewOrder;
