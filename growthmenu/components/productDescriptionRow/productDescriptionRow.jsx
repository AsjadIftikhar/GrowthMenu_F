import React from 'react'
import ButtonCard from '../buttonCard/buttonCard'
import Image from "next/image";
import Button from '../button/button';


const ProductDescriptionRow = () => {
    return (

        <React.Fragment>
            <div className="flex justify-between">
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
                            text="Product Descriptions"
                        />

                    </div>
                    <div className='flex flex-col justify-between '>
                        <div className='text-lg font-semibold'>Product Description</div>
                        <div className='text-xs font-extralight text-Grey_2'>#12345678</div>
                        <div className='text-sm text_Grey_3'>Feature description goes here Feature description goes here
                            Feature description goes here
                        </div>
                        <div className='text-base font-normal'>Delivery Date:<span
                            className='text-Grey_1'>12 Nov 2021</span></div>
                    </div>
                </div>
                <div className='flex items-center justify-between mr-8'>
                    <div className='w-24 pr-2'>
                        <Button buttonText={"In progress"} backgroundColor="bg-LightGreen" textColor={"text-white"}
                                borderRadius="rounded-xl"/>
                    </div>
                    <div className='w-24'>
                        <Button buttonText={"View Order"} backgroundColor="bg-white" textColor={"text-DarkBlue"}
                                borderRadius="rounded-xl"/>
                    </div>

                </div>
            </div>
        </React.Fragment>)
}

export default ProductDescriptionRow