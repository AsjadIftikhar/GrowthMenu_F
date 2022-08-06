import React, {useState, useEffect} from "react";

import Button from "../../components/button/button";
import DynamicFields from "../../components/dynamicFields/dynamicFields";

import {useRouter} from "next/router";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"


const OrderForm = () => {
    const router = useRouter();

    const [services, setServices] = useState([]);
    const [service, setService] = useState([]);
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);


    const onSelect = (value, service, index) => {
        const selectedService = [...services];
        if (service.type === "textField") {
            selectedService[index].text_field["text"] = value;
        } else if (service.type === "imageField") {
            // formData.append("upload_image", value);
            selectedService[index].image_field["upload_image"] = value;
        } else {
            selectedService[index].file_field["upload_file"] = value;
        }
        setServices(selectedService);
    };

    return (
        <React.Fragment>

            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>

                    <div className="pt-3">
                        <div></div>
                        <label
                            htmlFor="last_name"
                            className="block mb-2  text-lg font-medium text-gray-900"
                        >
                            How many {service.title} would you like?
                        </label>
                        <div></div>
                        <div className="flex items-center">
                            <input
                                type="number"
                                className="bg-gray-50 border p-3 m-5 border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block "
                                onChange={(e) => setTotal(e.target.value)}
                                value={total}
                            />
                            <Button
                                buttonText={"Add Posts"}
                                backgroundColor={"bg-DarkBlue"}
                                textColor={"text-white"}
                                onClick={() => {
                                    const arr = [];
                                    if (total >= 0) {
                                        for (const i = 0; i < total; i++) {
                                            arr.push(i);
                                        }
                                    }
                                    setPosts(arr);
                                }}
                            />
                        </div>
                        {posts.map((p, index) => (
                            <div key={p.id} className="p-3">
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2  text-sm font-medium text-gray-900"
                                >
                                    project # {index + 1}
                                </label>
                                <div className="flex flex-wrap ">
                                    {services.map((service, index) => {
                                        return (
                                            <DynamicFields
                                                key={service + index}
                                                field={service}
                                                onSelect={(value) => onSelect(value, service, index)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        {/*<div className="w-48 float-right">*/}
                        {/*    <Button*/}
                        {/*        buttonText={"Save Post"}*/}
                        {/*        backgroundColor={"bg-DarkBlue"}*/}
                        {/*        textColor={"text-white"}*/}
                        {/*        onClick={saveOrders}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
};

export default OrderForm;
