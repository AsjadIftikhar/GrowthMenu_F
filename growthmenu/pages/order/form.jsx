import React, {useState} from "react";

import Button from "../../components/button/button";
import DynamicFields from "../../components/dynamicFields/dynamicFields";
import Layout from "../../components/layout/layout";


const OrderForm = () => {

    const [services, setServices] = useState([]);
    const [service, setService] = useState([]);
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);


    const onSelect = (value, service, index) => {
        const selectedService = [...services];
        if (service.type === "textField") {
            selectedService[index].text_field["text"] = value;
        } else if (service.type === "imageField") {
            selectedService[index].image_field["upload_image"] = value;
        } else {
            selectedService[index].file_field["upload_file"] = value;
        }
        setServices(selectedService);
    };

    return (
        <React.Fragment>
            <Layout>
                <div className="pt-3">
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
                                    for (let i = 0; i < total; i++) {
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
                </div>
            </Layout>


        </React.Fragment>
    );
};

export default OrderForm;
