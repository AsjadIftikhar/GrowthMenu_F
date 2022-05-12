import React, {useState} from "react";
import Button from "../button/button";
import TextArea from "../textarea/textarea";
import axios from "../../pages/api/axios";
import axiosPrivate from "../../pages/api/axios";

import { useRouter } from "next/router";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const PLACE_ORDER_URL = '/api/orders/order_list/';
const Requirment = ({category}) => {

    const [due_at, setDue_at] = useState();
    const [requirements, setRequirements] = useState();
    const [details, setDetails] = useState();
    const [customer, setCustomer] = useState();
    const axiosPrivate = useAxiosPrivate();

    const router = useRouter();

    const handlePlaceOrder = async (e) => {
        e.preventDefault()
        console.log(category)


        const response = await axiosPrivate.post(PLACE_ORDER_URL,
            JSON.stringify({
                "category": category.replace("-", " "),
                "due_at": "2022-04-29",
                "requirements": requirements,
                "details": details,
                "customer": 1
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        router.push("/order-list/")

    }

    return (
        <div className="w-full rounded-xl border-slate-300 border-t-0	border	">
            <div className="h-12 bg-DarkBlue rounded-b-none text-white pl-6 rounded-xl flex items-center font-medium">
                Submit your requirements to Start The Order
            </div>
            <div className="px-6 py-2">
                <div className="font-medium">
                    We Need Following information to get started:
                </div>
                <TextArea Field={requirements} setField={setRequirements}/>
                <div className="border-t border-gray-200 dark:border-gray-700"/>
                <TextArea Field={details} setField={setDetails}/>

                {/*<span className="px-2">Due Date</span>*/}
                {/*<input type="date"*/}
                {/*       className="my-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                {/*       placeholder="Select date"*/}
                {/*       id="due_at"*/}
                {/*       onChange={(e) => setDue_at(e.target.value)}*/}
                {/*       value={due_at}/>*/}

                <div className="flex items-center justify-end">
                    {/*<span className="pr-10 text-Grey_1 font-medium">Save As Draft</span>*/}
                    <div className="w-48">
                        <Button
                            buttonText={"Place Order"}
                            backgroundColor="bg-DarkBlue"
                            textColor={"text-white"}
                            onClick={handlePlaceOrder}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requirment;
