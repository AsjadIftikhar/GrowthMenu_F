import React, {useEffect, useState} from "react";
import Image from "next/image";

import {get_services} from "../../services/orderServices"

import ButtonCard from "../../components/buttonCard/buttonCard";
import Loader from "../../components/loader";
import Layout from "../../components/layout/layout";


const NewOrder = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const response = await get_services()

            setServices(response.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);


    if (isLoading === true) return (
        <Loader/>
    )

    return (


        <React.Fragment>
            <Layout>
                <div className="flex justify-between pt-8">
                    <div className="text-3xl font-semibold  ">Create A New Order</div>
                    <span/>
                </div>
                <div className=" font-normal text-zinc-500 pb-8">
                    Select your Service to create an order
                </div>
                <div className="w-3/4 grid grid-cols-3 bg-white px-24 rounded-lg">
                    {services.map(service => (
                        <div key={service.id} className="p-8">
                            <ButtonCard
                                backgroundColor="bg-LightGrey"
                                icon={
                                    <Image
                                        src="/images/product.svg"
                                        alt=""
                                        height="30px"
                                        width="30px"
                                    />
                                }
                                id={service.id}
                                title={service.title}
                            />
                        </div>
                    ))}
                </div>
            </Layout>

        </React.Fragment>
    );
};

export default NewOrder;
