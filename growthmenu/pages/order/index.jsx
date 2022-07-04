import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import ButtonCard from "../../components/buttonCard/buttonCard";

const SERVICES = [
    {
        "id": 0,
        "text": "Product Descriptions",
        "src": "/images/product.svg"
    },
    {
        "id": 1,
        "text": "Blogs & Articles",
        "src": "/images/blog.svg"
    },
    {
        "id": 2,
        "text": "Email Marketing",
        "src": "/images/emailMarketing.svg"
    },
    {
        "id": 3,
        "text": "Ad Copy",
        "src": "/images/ad.svg"
    },
    {
        "id": 4,
        "text": "Web Copy",
        "src": "/images/globe.svg"
    },
    {
        "id": 5,
        "text": "Video Scripts",
        "src": "/images/video.svg"
    },

]

const NewOrder = () => {
    const router = useRouter();

    const [add_visibility, setAdd_visibility] = useState("hidden")

    const [edit_visibility, setEdit_visibility] = useState("hidden")
    const [edit_index, setEdit_Index] = useState("")

    const [new_service, setNewService] = useState({
        "text": "",
        "src": "/images/product.svg",
    },)


    const [services, setServices] = useState(SERVICES);

    const handleAddService = e => {
        e.preventDefault();

        new_service.id = services.length + 1

        const existing_services = services
        existing_services.push(new_service)

        setServices(existing_services)
        setAdd_visibility("hidden")

    };

    const handleEditService = e => {

        e.preventDefault();
        const existing_services = services;

        // Find index of specific object using findIndex method.
        const service_index = existing_services.findIndex((p => p.id === edit_index));

        // Update object
        existing_services[service_index].text = new_service.text

        // Save
        setServices(existing_services)
        setEdit_visibility("hidden")
    };

    const handleDeleteService = (_service) => {
        const existing_services = services.filter(s => s.text !== _service.text)
        setServices(existing_services)
    };

    const handleFormChange = e => {

        const change = {...new_service}

        change[e.currentTarget.name] = e.currentTarget.value;
        setNewService(change)
    }

    return (
        <React.Fragment>
            <div className="flex justify-between pt-8">
                <div className="text-3xl font-semibold  ">Create A New Order</div>
                <span/>
                <button type="button"
                        className="text-white bg-LightBlue focus:ring-4 focus:outline-none focus:ring-blue-300
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => {
                            setAdd_visibility((add_visibility === 'hidden') ? "" : "hidden")
                        }}>
                    Add a Service
                </button>
            </div>
            <div className=" font-normal text-zinc-500 pb-8">
                Select your Service to create an order
            </div>
            <div className="w-3/4 grid grid-cols-3 bg-white px-24 rounded-lg">
                {services.map(service => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={service.id} className="p-8">
                        <ButtonCard
                            backgroundColor="bg-LightGrey"
                            icon={
                                <Image
                                    src={service.src}
                                    alt=""
                                    height="30px"
                                    width="30px"
                                />
                            }
                            text={service.text}
                            onClick={url => {
                                router.push(url);
                            }}
                        />
                        <div className="flex justify-between mt-0.5 py-2 px-2 bg-LightBlue rounded drop-shadow">
                            <button className="cursor-pointer hover:animate-bounce"
                                    type="button"
                                    onClick={() => {
                                        setEdit_Index(service.id)
                                        setEdit_visibility((edit_visibility === 'hidden') ? "" : "hidden")
                                    }}>
                                <Image
                                    src="/images/edit.png"
                                    alt=""
                                    height="20px"
                                    width="20px"
                                />
                            </button>
                            <button className="cursor-pointer hover:animate-bounce"
                                    type="button"
                                    onClick={() => {
                                        handleDeleteService(service)
                                    }}>
                                <Image
                                    src="/images/delete.png"
                                    alt=""
                                    height="20px"
                                    width="20px"
                                />
                            </button>
                        </div>
                        {/* Edit Service */}
                        {(edit_index === service.id) ?
                            <div className={`${edit_visibility}`}>
                                <form onSubmit={handleEditService}>
                                    <div className="mb-6">
                                        <label htmlFor="service"
                                               className="block mb-2 font-medium">New Service Name
                                        </label>
                                        <input type="text"
                                               id="edit_service"
                                               name="text"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                               value={new_service.text}
                                               onChange={handleFormChange}
                                               required=""/>
                                    </div>
                                    <button type="submit"
                                            className="text-white bg-DarkBlue hover:bg-blue-800 focus:ring-4
                                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                                    w-full sm:w-auto px-5 py-2.5 text-center ">Edit Service
                                    </button>
                                </form>
                            </div> : <div />}

                    </div>

                ))}

                <div className={`${add_visibility} p-8`}>
                    <div className="w-full flex flex-col bg-LightGrey items-center justify-center py-5
                                   rounded-lg drop-shadow">
                        <form onSubmit={handleAddService}>
                            <div className="mb-6">
                                <label htmlFor="add_service"
                                       className="block mb-2 font-medium">Service Name
                                </label>
                                <input type="text"
                                       id="add_service"
                                       name="text"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       value={new_service.text}
                                       onChange={handleFormChange}
                                       required=""/>
                            </div>
                            <button type="submit"
                                    className="text-white bg-DarkBlue hover:bg-blue-800 focus:ring-4
                                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                                    w-full sm:w-auto px-5 py-2.5 text-center ">Add Service
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default NewOrder;
