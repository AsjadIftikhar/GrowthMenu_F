import React, {useEffect, useState} from "react";
// import Dropdown from "../../components/dropdown/dropdown";
import Table from "../../components/table/table";
import TextIconCard from "../../components/textIconCard/textIconCard";
import TextInput from "../../components/textInput/textInput";
import Image from "next/image"
import axios from '../../api/axios';
import {axiosPrivate} from "../../api/axios";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"
// import {orders} from "./orderManagementdata";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const ORDER_LIST_URL = '/api/orders/';

const OrderManagement = () => {

    const [orders, setOrders] = useState([]);
    // const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const controller = new AbortController();
        async function getOrders() {
            const order_list = await axiosPrivate.get(ORDER_LIST_URL, {
                signal: controller.signal,
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        });
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
            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>
            <div className="text-2xl font-semibold py-5">Order Management</div>
            <div className="flex items-center justify-between">
                <div className="flex">
      <span className="w-54 pr-4">
      <TextInput/>
      </span>
                    <span className="w-54 pr-4">
          {/*<Dropdown title="Services"/>*/}

      </span>
                    <span className="w-54 pr-4">
            {/*<Dropdown title="Status"/>*/}

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
                </div>
            </div>
        </React.Fragment>
    );
};

export default OrderManagement;
