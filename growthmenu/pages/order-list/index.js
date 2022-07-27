import React, {useEffect, useState} from 'react'
import TextIconCard from '../../components/textIconCard/textIconCard'
import Image from "next/image"
import Plus from '../../public/images/plus'
import Tab from '../../components/tab/tab'
import ProductDescriptiontable from '../../components/productTable/productTable';
import axios from "../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const ORDER_LIST_URL = '/api/orders/';

const OrderDetail = () => {

    const [orders, setOrders] = useState([]);
    const axiosPrivate = useAxiosPrivate();


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        async function getOrders() {
            const order_list = await axiosPrivate.get(ORDER_LIST_URL, {
                signal: controller.signal
            });
            console.log(order_list.data)
            // setOrders(order_list.data)
            isMounted && setOrders(order_list.data);
        }

        getOrders();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <React.Fragment>
            <div>
                <div className="flex justify-between items-center py-5">
                    <div className="text-2xl font-semibold">Order Details</div>
                    <div className="w-48 pt-1">
                        <TextIconCard backgroundColor="bg-white" textColor="text-DarkBlue" icon={<Plus color={"#fff"}/>} text="Create new Order" />
                    </div>
                </div>
                <div className='pb-4'>
                    <Tab/>
                </div>

                <ProductDescriptiontable products={orders} />
            </div>
        </React.Fragment>
    )
}

export default OrderDetail