import React, {useState} from 'react';
import Image from "next/image";

import {Carousel} from 'primereact/carousel';


const Carousal = () => {

    const [PRODUCTS, setPRODUCTS] = useState([
        {
            "id": 1,
            "title": "Product Descriptions",
            "src": "/images/1.jpeg"
        },
        {
            "id": 2,
            "title": "Blogs & Articles",
            "src": "/images/2.jpeg"
        },
    ]);


    const itemTemplate = (product) => {
        return (
            <div className="h-96 rounded-lg">
                <Image src={product.src}
                       layout="fill"
                       alt="..."/>
            </div>
        )
    }
    return (
        <Carousel value={PRODUCTS} itemTemplate={itemTemplate} className="drop-shadow-lg w-3/4"/>
    );
}

export default Carousal;