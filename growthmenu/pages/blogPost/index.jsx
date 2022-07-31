import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Button from "../../components/button/button";
import Dropdown from "../../components/dropdown/dropdown";
import DynamicFields from "../../components/dynamicFields/dynamicFields";
import {axiosPrivate} from "../api/axios";
import Image from "next/image";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"
import {get_service} from "../../services/orderServices";

const INPUT_CHOICES = [
    {value: "textField", label: "textField"},
    // { value: "textArea", label: "textArea" },
    // { value: "dropDown", label: "dropdown" },
    // { value: "numberField", label: "numberField" },
    {value: "imageField", label: "imageField"},
    {value: "fileField", label: "fileField"},
];


const CreateBlog = () => {
    const router = useRouter();

    const PLACE_ORDER_URL = `/api/service/${router.query.id}/requirement/`;

    const [selectedFields, setSelectedFields] = useState([]);
    const [label, setLabel] = useState("");
    const [field, setField] = useState("");
    const [service, setService] = useState([]);

    const handleDropdown = (value) => {
        console.log("event", value);
        setField(value);
    };

    const handleDeleteRequirement = async (_field) => {

        // await delete_service(_service.id)

        await axiosPrivate.delete(`/api/service/${router.query.id}/requirement/${_field.id}/`,
            {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            });

        const existing_fields = selectedFields.filter(s => s.id !== _field.id)
        setSelectedFields(existing_fields)
    };

    const addField = (value) => {
        if (label && field) {
            setSelectedFields([...selectedFields, {type: field, label: label}]);
            setLabel("");
        }
    };

    useEffect(() => {
        if (!router.isReady) return;

        const controller = new AbortController();

        const fetchService = async () => {

            const response = await get_service(router.query.id)
            setService(response.data);
        };

        async function getExistingFields() {
            const fields_list = await axiosPrivate.get(PLACE_ORDER_URL, {
                signal: controller.signal,
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            });
            // console.log("fields_list", fields_list);
            setSelectedFields(fields_list.data);
        }

        getExistingFields();
        fetchService();
    }, [router.isReady]);

    const saveFields = async (e) => {
        e.preventDefault();

        const response = await axiosPrivate.post(
            PLACE_ORDER_URL,
            JSON.stringify(selectedFields),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                },
            }
        );

        const controller = new AbortController();
        const fields_list = await axiosPrivate.get(PLACE_ORDER_URL, {
            signal: controller.signal,
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        });
        // console.log("fields_list", fields_list);
        setSelectedFields(fields_list.data);
        // console.log("responsee", response);
        // router.push("/blogPostDetails/");
        router.push('/order')
    };
    // console.log("value", selectedFields);
    return (
        <React.Fragment>

            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>

                    <div className="flex justify-between items-center pt-3">
                        <div className="text-2xl font-semibold">Create a {service.title} requirement form</div>
                        <div className=" flex ">
                            <div className="w-36 mr-2">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="enter a field label"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    onChange={(e) => setLabel(e.target.value)}
                                    value={label}
                                />
                            </div>
                            <div className="w-36 mr-2">
                                <Dropdown
                                    value={field}
                                    data={INPUT_CHOICES}
                                    placeholder={"Select Input Field"}
                                    styleClass={
                                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm " +
                                        "rounded-lg focus:ring-blue-500 focus:border-blue-500 block " +
                                        "w-full p-2.5 inline-flex justify-end"
                                    }
                                    onChange={handleDropdown}
                                />
                            </div>
                            <div>
                                <Button
                                    buttonText={"Add Field"}
                                    backgroundColor={"bg-DarkBlue"}
                                    textColor={"text-white"}
                                    onClick={addField}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap ">
                        {selectedFields.map((field, index) => (
                            <div>
                                <DynamicFields key={field + index} field={field}/>
                                <button className="cursor-pointer hover:animate-bounce"
                                        type="button"
                                        onClick={() => {
                                            handleDeleteRequirement(field)
                                        }}>
                                    <Image
                                        src="/images/delete.png"
                                        alt=""
                                        height="20px"
                                        width="20px"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedFields.length > 0 && (
                        <div className="w-48 float-right	">
                            <Button
                                buttonText={"Save Field"}
                                backgroundColor={"bg-DarkBlue"}
                                textColor={"text-white"}
                                onClick={saveFields}
                            />
                        </div>
                    )}
                </div>
            </div>


        </React.Fragment>
    );
};

export default CreateBlog;
