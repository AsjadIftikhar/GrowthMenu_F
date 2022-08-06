import React from 'react';

import Link from "next/link";
import {useRouter} from "next/router";
import {marked} from "marked";
import matter from 'gray-matter'

const ServiceDescription = ({service}) => {
    const router = useRouter();

    if (!service.description) {
        return <></>
    }
    console.log(marked(service.description))
    return (
        <div>
            <h2 className="text-4xl text-gray-800 py-4">About the Service</h2>
            <div className='post-body w-1/2'>
                <div dangerouslySetInnerHTML={{__html: marked(service.description)}}/>
            </div>
            <Link href={{
                pathname: "/order/form",
                query: {id: router.query.id}
            }}>
                <div className="my-8 w-1/2 items-center px-16 py-4 text-sm font-medium text-center text-white
                    bg-DarkBlue rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                    Start Your Order
                </div>
            </Link>
        </div>


    );
}

export default ServiceDescription;