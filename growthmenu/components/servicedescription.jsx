import React from 'react';

import {useRouter} from "next/router";
import {marked} from "marked";

const ServiceDescription = ({service}) => {

    if (!service.description) {
        return <></>
    }

    return (
        <div>
            <h2 className="text-4xl text-gray-800 py-4">About the Service</h2>
            <div className='post-body w-1/2'>
                <div dangerouslySetInnerHTML={{__html: marked(service.description)}}/>
            </div>
        </div>


    );
}

export default ServiceDescription;