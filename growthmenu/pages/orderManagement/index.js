import React, {useEffect, useState} from "react";
import DropDown from "../../components/dropdown/dropdown";
import Table from "../../components/table/table";
import TextIconCard from "../../components/textIconCard/textIconCard";
import TextInput from "../../components/textInput/textInput";
import Image from "next/image"
import axios from '../../api/axios';
import {axiosPrivate} from "../../api/axios";
// import {orders} from "./orderManagementdata";

const ORDER_LIST_URL = '/api/orders';

const OrderManagement = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders() {
            const order_list = await axios.get(ORDER_LIST_URL)
            console.log(order_list.data)
            setOrders(order_list.data)
        }

        getOrders()
    }, []);

//     const getOrders = async () => {
//         const data = await axiosPrivate.get('/api/order/');
//         let response = await axios.post('/auth/order',
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             }
//         );
//         console.log('data', data, response)
//     }
//     useEffect(() => {
//
// // getOrders()
//     }, [])

    return (
        <React.Fragment>
            <div className="text-2xl font-semibold py-5">Order Management</div>
            <div className="flex items-center justify-between">
                <div className="flex">
      <span className="w-54 pr-4">
      <TextInput/>
      </span>
                    <span className="w-54 pr-4">
          <DropDown title="Services"/>

      </span>
                    <span className="w-54 pr-4">
            <DropDown title="Status"/>

      </span>
                </div>
                <div className="w-60 self-end">
                    <TextIconCard backgroundColor="bg-white" textColor="text-DarkBlue"
                                  icon={<Image src="/images/order.svg" alt="" height="20px" width="20px"/>}
                                  text="Create Custom Order"/>
                </div>
            </div>
            <div className="pt-10">
                <Table orders={orders}/>
            </div>
        </React.Fragment>
    );
};

export default OrderManagement;
