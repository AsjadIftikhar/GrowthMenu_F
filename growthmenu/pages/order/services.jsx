import React, {useState, useEffect} from "react";
import Requirement from "../../components/requirements/requirements";
import {useRouter} from "next/router";
import Carousal from "../../components/carousal";
import ServiceDescription from "../../components/servicedescription";
import FAQs from "../../components/faqs";


const Premium = () => {
    const router = useRouter();

    const [category, setCategory] = useState("");

    useEffect(() => {
        const router_category = router.query.category
        if (router_category)
            setCategory(router_category)

    }, [category])

    return (
        <div className="space-y-8 py-8">
            <div className="text-3xl font-bold">{category}</div>
            <Carousal/>
            <ServiceDescription/>
            <FAQs/>


            {/*<Requirement category={category}/>*/}
        </div>
    );
};

export default Premium;
