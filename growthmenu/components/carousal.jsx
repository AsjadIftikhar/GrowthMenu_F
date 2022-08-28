import React, {useState} from 'react';
import Image from "next/image";

import {Carousel} from 'flowbite-react';


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

    return (

        <div className="w-4/5 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
                {PRODUCTS.map((product) => (
                        <div key={product.id}>
                            <img
                                src={product.src}
                                alt="..."
                            />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Carousal;