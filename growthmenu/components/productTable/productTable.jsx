import React from 'react'
import ButtonCard from '../buttonCard/buttonCard'
import Image from "next/image";
import Button from '../button/button';


const ProductTable = ({products}) => {

    const mapping = {
        "In Revision": "bg-Red",
        "Refund": "bg-Yellow_2",
        "Awaiting Brief": "bg-LightGreen",
        "Complete": "bg-Yellow_2",
        'In Progress': "bg-Green",
        'Canceled': "bg-Red",
        
    }

    return (
        <React.Fragment>
            {products.map((product, index) => {
                    return <div key={product + index} className="flex py-2 justify-between">
                        <div className=' flex'>
                            <div className="w-40 pr-2">
                                <ButtonCard
                                    mainbackcolor={"bg-white"}
                                    backgroundColor="bg-LightPink"
                                    icon={
                                        <Image
                                            src="/images/product.svg"
                                            alt=""
                                            height="20px"
                                            width="20px"
                                        />
                                    }
                                    paddingY='py-4'
                                    text=""
                                />

                            </div>
                            <div className='flex flex-col justify-between '>
                                <div className='text-lg font-semibold'>{product.service.title}</div>
                                <div className='text-xs font-extralight text-Grey_2'>{product.service.id}</div>
                                <div className='text-sm text_Grey_3'>{product.service.service_description.text} </div>
                                <div className='text-base font-normal'>Delivery Date: <span
                                    className='text-Grey_1'>{product.due_at}</span></div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='w-28 pr-2'>
                                <Button
                                    buttonText={product.status_category}
                                    backgroundColor={mapping[product.status_category]}
                                    textColor={"text-white"} borderRadius="rounded-xl"/>
                            </div>
                            <div className='w-24'>
                                <Button buttonText={"View Order"} backgroundColor="bg-white" textColor={"text-DarkBlue"}
                                        borderRadius="rounded-xl"/>
                            </div>

                        </div>
                    </div>
                }
            )}

        </React.Fragment>)
}

export default ProductTable