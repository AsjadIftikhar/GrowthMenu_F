import React, {useState, useEffect} from "react";

import {useRouter} from "next/router";

import {get_service} from "../../services/orderServices"

import Carousal from "../../components/carousal";
import ServiceDescription from "../../components/servicedescription";
import FAQs from "../../components/faqs";
import Loader from "../../components/loader";
import Layout from "../../components/layout/layout";
import Footer from "../../components/footer/footer";
import Link from "next/link";


const Service = () => {
    const router = useRouter();

    const [service, setService] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!router.isReady) return;
        const getServiceDetails = async () => {
            setIsLoading(true);

            const response = await get_service(router.query.id)
            setService(response.data);

            setIsLoading(false);
        };

        getServiceDetails();

    }, [router.isReady]);

    if (isLoading === true) return (
        <Loader/>
    )

    return (

        <React.Fragment>
            <Layout>
                <div className="space-y-8 py-8">
                    <div>
                        <div className="text-4xl text-gray-900 py-2">{service.title}</div>
                        <div className="inline-flex">
                            <span className="text-gray-400 mr-4">growth_menu</span>
                            <span className="border border-r-gray-800 mr-4"/>
                        </div>

                    </div>
                    <Carousal/>
                    <hr className="w-4/5 "/>
                    <ServiceDescription service={service}/>
                    <hr className="w-1/2"/>
                    <FAQs faqs={service.service_faq}/>

                    <Link href={{
                        pathname: "/order/form",
                        query: {id: router.query.id}
                    }}>
                        <div className="w-1/2 items-center px-16 py-6 font-semibold rounded text-center text-white
                                        bg-DarkBlue focus:ring-4 focus:ring-blue-200
                                        hover:bg-blue-800 hover:cursor-pointer">
                            Start Your Order
                        </div>
                    </Link>
                </div>

            </Layout>
        </React.Fragment>


    );
};

export default Service;
