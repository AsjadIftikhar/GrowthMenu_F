import React from 'react'
import TextIconCard from '../../components/textIconCard/textIconCard'
import Image from "next/image"
import Plus from '../../public/images/plus'
import Tab from '../../components/tab/tab'
import ProductDescriptionRow from '../../components/productDescriptionRow/productDescriptionRow'
const OrderDetail = () => {
  return (
    <React.Fragment>
        <div className='flex justify-between items-end'>
    <div className="text-2xl font-semibold py-5">Order Details</div>
    <div className='w-60'>
    <TextIconCard backgroundColor="bg-white" textColor="text-DarkBlue" icon={<Plus color={"#fff"} />}  text={"Create A new Order"}/>
    </div>
    </div>
    <Tab/>
    <div className='pt-4'>
    <ProductDescriptionRow/>
    </div>
    </React.Fragment>
  )
}

export default OrderDetail