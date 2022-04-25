import React from "react";
import Image from "next/image";

const TextArea = ({ Field, setField }) => {
    return (
        <div className="py-2">
            <div className="text-Grey_1 pb-2">
                1. Growth Menu is A this Text is Generated From English Text Generator
                Copy And Paste your Text Here.
            </div>
            <div className="border rounded-lg">
                <textarea
                    className=" w-full border-0 border-none overflow-hidden focus:border-none focus:ring-transparent bg-inherit	 focus:border-0 focus:overflow-hidden border-transparent focus:outline-none	active:outline-none	border-transparent resize-none"
                    id={Field}
                    autoComplete="off"
                    onChange={(e) => setField(e.target.value)}
                    value={Field}
                    required
                />

                <div className=" h-10 border-t flex items-center px-4 justify-between">
                    <span className="text-IconGrey">0/2000</span>
                    <Image src="/images/attach.svg" alt="" height="20px" width="20px"/>
                </div>
            </div>
        </div>
    );
};

export default TextArea;
