import React, {useEffect} from "react";
import {useState} from "react";
import {axiosPrivate} from "../../api/axios";
import Button from "../../components/button/button";
import {useRouter} from "next/router";
import Image from "next/image";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"
import {get_service} from "../../services/orderServices";


const ProductDescription = () => {
    const router = useRouter();
    const DESCRIPTION_URL = `/api/service/${router.query.id}/description/`;
    const FAQS_URL = `/api/service/${router.query.id}/faq/`;

    const [FAQs, setFAQs] = useState([]);
    const [FAQ, setFAQ] = useState({question: "", answer: ""});
    const [isEdit, setIsEdit] = useState(false);
    const [description, setDescription] = useState("");
    const [service, setService] = useState([]);

    useEffect(() => {

        if (!router.isReady) return;
        const controller = new AbortController();

        const fetchService = async () => {

            const response = await get_service(router.query.id)
            setService(response.data);
        };

        async function getFAQs() {
            const faqs_list = await axiosPrivate.get(FAQS_URL, {
                signal: controller.signal,
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            });
            const desc = await axiosPrivate.get(DESCRIPTION_URL, {
                signal: controller.signal,
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            });
            // console.log("desc", desc);
            console.log("description", desc);
            console.log("faq", faqs_list);
            if (faqs_list.data.length > 0)
                setFAQs(faqs_list.data);
            if (desc.data.length > 0)
                setDescription(desc.data[0].text);
            // console.log("description", description, FAQs);

        }

        getFAQs();
        fetchService();
    }, [router.isReady]);
    const saveText = async () => {
        console.log("description", description, FAQs);
        const desc = await axiosPrivate.post(
            DESCRIPTION_URL,
            JSON.stringify({text: description}),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                },
            }
        );

        const allFaqs = FAQs.map(async (faq) => {
            const faqObj = {
                question: faq.question,
                answer: faq.answer,
            };
            if (faq.id)
                return await axiosPrivate.put(
                    `/api/service/${router.query.id}/faq/${faq.id}/`,
                    JSON.stringify(faqObj),
                    {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `JWT ${localStorage.getItem("access")}`
                        },
                    }
                );
            return await axiosPrivate.post(FAQS_URL, JSON.stringify(faqObj), {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                },
            });
        });
        await Promise.all(allFaqs);
        await router.push({
                pathname: '/blogPost',
                query: {id: router.query.id}
            }
        )
    };
    const handleDeleteFAQ = async (_field) => {

        // await delete_service(_service.id)

        await axiosPrivate.delete(`/api/service/${router.query.id}/faq/${_field.id}/`,
            {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            });

        const existing_fields = FAQs.filter(s => s.id !== _field.id)
        setFAQs(existing_fields)
    };
    const addFAQ = () => {
        setFAQs([...FAQs, {...FAQ, open: false}]);
        setFAQ({question: "", answer: ""});
    };

    return (
        <React.Fragment>
            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>

                    <div className="text-4xl font-semibold pt-5 ">{service.title}</div>
                    <iframe
                        className="w-full p-5 h-2/5"
                        src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
                        frameBorder="0"
                    />
                    <div className="grid grid-cols-3 gap-2 flex items-center p-5 mt-2">
                        <div className="mb-2 p-3">
                            <img
                                src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                                className="max-w-full h-auto rounded-lg"
                                alt=""
                            />
                        </div>

                        <div className="mb-2 p-3">
                            <img
                                src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                                className="max-w-full h-auto rounded-lg"
                                alt=""
                            />
                        </div>

                        <div className="mb-2 p-3">
                            <img
                                src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                                className="max-w-full h-auto rounded-lg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mb-6 w-full">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-lg font-medium text-gray-900"
                        >
                            Add Description
                        </label>
                        <textarea
                            id="address"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Answer"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-lg font-medium text-gray-900"
                        >
                            Add FAQ
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="Question"
                            className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={(e) => setFAQ({...FAQ, question: e.target.value})}
                            value={FAQ.question}
                        />
                        <textarea
                            id="address"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Answer"
                            onChange={(e) => setFAQ({...FAQ, answer: e.target.value})}
                            value={FAQ.answer}
                        />
                    </div>
                    <div className="w-32 mt-2">
                        <Button
                            buttonText={"Add FAQ"}
                            backgroundColor={"bg-DarkBlue"}
                            textColor={"text-white"}
                            onClick={addFAQ}
                        />
                    </div>
                    {FAQs.map((faq, index) => {
                        return (
                            <div
                                data-active-classes="bg-blue-100 dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 text-blue-600 dark:text-white">
                                {/* <h2 id="accordion-color-heading-1"> */}
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200   dark:focus:ring-blue-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-800 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
                                    onClick={() => {
                                        const faq = FAQs;
                                        faq[index].open = !faq[index].open;
                                        setFAQs([...faq]);
                                    }}
                                >
                                    <span contentEditable={isEdit}>{faq.question}?</span>
                                    <svg
                                        data-accordion-icon=""
                                        className="w-6 h-6 rotate-180 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {/* </h2> */}
                                {faq.open === true && (
                                    <div
                                        className="p-5 font-light border border-b-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <div
                                            className=" text-gray-500 dark:text-gray-400"
                                            contentEditable={isEdit}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}

                                <button className="cursor-pointer hover:animate-bounce"
                                        type="button"
                                        onClick={() => {
                                            handleDeleteFAQ(faq)
                                        }}>
                                    <Image
                                        src="/images/delete.png"
                                        alt=""
                                        height="20px"
                                        width="20px"
                                    />
                                </button>

                            </div>
                        );
                    })}

                    <div className="flex mt-2 float-right">
                        <div className="w-24 mr-2 float-right">
                            <Button
                                buttonText={"Edit"}
                                backgroundColor={"bg-DarkBlue"}
                                textColor={"text-white"}
                                onClick={() => setIsEdit(true)}
                            />
                        </div>
                        <div className="w-32 ">
                            <Button
                                buttonText={"Save"}
                                backgroundColor={"bg-DarkBlue"}
                                textColor={"text-white"}
                                onClick={saveText}
                            />
                        </div>
                    </div>


                </div>
            </div>


        </React.Fragment>
    );
};

export default ProductDescription;
