import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import ButtonCard from "../../components/buttonCard/buttonCard";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"

import {get_services, create_services, update_service, delete_service} from "../../services/orderServices"


const NewOrder = () => {
    const router = useRouter();

    const [add_visibility, setAdd_visibility] = useState("hidden")

    const [edit_visibility, setEdit_visibility] = useState("hidden")
    const [edit_index, setEdit_Index] = useState("")

    const [new_service, setNewService] = useState({
        "title": "",
        "src": "/images/product.svg",
    },)

    const [services, setServices] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const response = await get_services()

            setServices(response.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);


    const handleAddService = async e => {
        e.preventDefault();

        const response = await create_services(new_service)
        console.log(response)

        // new_service.id = services.length + 1

        new_service.id = response.data.id

        const existing_services = services
        existing_services.push(new_service)

        setServices(existing_services)
        setAdd_visibility("hidden")
        // router.push("/productDescription")
        console.log(existing_services)
        router.push({
                pathname: '/productDescription',
                query: {id: new_service.id}
            }
        )

    };

    const handleEditService = async e => {

        e.preventDefault();

        const existing_services = services;

        // Find index of specific object using findIndex method.
        const service_index = existing_services.findIndex((p => p.id === edit_index));

        // Update object
        existing_services[service_index].title = new_service.title

        await update_service(existing_services[service_index])
        // Save
        setServices(existing_services)
        setEdit_visibility("hidden")
        router.push("/productDescription")
    };

    const handleDeleteService = async (_service) => {

        await delete_service(_service.id)

        const existing_services = services.filter(s => s.title !== _service.title)
        setServices(existing_services)
    };

    const handleFormChange = e => {

        const change = {...new_service}

        change[e.currentTarget.name] = e.currentTarget.value;
        setNewService(change)
    }

    if (isLoading === true) return (
        <div className="text-center py-8">
            <svg role="status"
                 className="inline w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-teal-600"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"/>
            </svg>
        </div>
    )

    return (


        <React.Fragment>
            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>

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
                                            src="/images/product.svg"
                                            alt=""
                                            height="30px"
                                            width="30px"
                                        />
                                    }
                                    id={service.id}
                                    title={service.title}
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
                                                       name="title"
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                       value={new_service.title}
                                                       onChange={handleFormChange}
                                                       required=""/>
                                            </div>
                                            <button type="submit"
                                                    className="text-white bg-DarkBlue hover:bg-blue-800 focus:ring-4
                                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                                    w-full sm:w-auto px-5 py-2.5 text-center ">Edit Service
                                            </button>
                                        </form>
                                    </div> : <div/>}

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
                                               name="title"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                               value={new_service.title}
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

                </div>
            </div>

        </React.Fragment>
    );
};

export default NewOrder;
