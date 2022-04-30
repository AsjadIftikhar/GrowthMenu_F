import React from "react";
import DropDown from "../../components/dropdown/dropdown";
import Table from "../../components/table/table";
import TextIconCard from "../../components/textIconCard/textIconCard";
import TextInput from "../../components/textInput/textInput";
import Image from "next/image"

const OrderManagement = () => {
    return (
        <React.Fragment>
            <div className="text-2xl font-semibold py-5">Order Management</div>
            <div className="flex items-center justify-between">
                <div className="flex">
      <span className="w-54 pr-4">
      <TextInput/>
      </span>
        <span className="w-54 pr-4">
            <DropDown/>

      </span>
                    <span className="w-54 pr-4">
            <DropDown/>

      </span>
                </div>
                <div className="w-60 self-end">
                    <TextIconCard backgroundColor="bg-white" textColor="text-white"
                                  icon={<Image src="/images/order.svg" alt="" height="20px" width="20px"/>}
                                  text="Create Custom Order"/>
                </div>
            </div>
            <div className="pt-10">
                <Table/>
            </div>
        </React.Fragment>
    );
};

export default OrderManagement;
