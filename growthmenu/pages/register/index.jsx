import {useRef, useState, useEffect} from "react";
import Script from 'next/script';

import axios from '../api/axios';
import {useRouter} from "next/router";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,24}$/;
const REGISTER_URL = '/auth/users/';
const PROFILE_URL = '/auth/customers/';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const router = useRouter()
    // User Fields
    // const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    ``

    // Profile Fields
    const [brand_name, setBrandName] = useState('');
    const [business_category, setBusinessCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [website_url, setWebsiteUrl] = useState('');
    const [address, setAddress] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        // const v1 = USER_REGEX.test(username);
        // const v2 = PWD_REGEX.test(password);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        console.log(email)
        console.log(username)
        console.log(password)
        try {
            let response = await axios.post(REGISTER_URL,
                JSON.stringify({email, username, password}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            console.log(response.data.id)
            // console.log(response?.accessToken);
            // console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUsername('');
            setPassword('');
            setMatchPwd('');

            router.push(`/register/${response.data.id}`);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            // errRef.current.focus();
        }
    }

    return (
        <>
            <Navbar/>
            <Breadcrumb/>
            <div className="flex flex-row">
                <div className="basis-3/7"/>
                <div className="basis-2/7 py-12 px-4">
                {success ? (
                    <section>
                        <h1>Success!</h1>
                        <p>
                            <a href="#">Sign In</a>
                        </p>
                    </section>
                ) : (
                    <section>
                        <p ref={errRef} className="">{errMsg}</p>
                        <form onSubmit={handleSubmit} className="relative z-0 mb-6 w-full group">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="email"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       id="email"
                                    // autoComplete="off"
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}
                                       required/>
                                <label htmlFor="floating_email"
                                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                    address</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       id="username"
                                    // autoComplete="off"
                                       onChange={(e) => setUsername(e.target.value)}
                                       value={username}
                                       required/>
                                <label htmlFor="floating_email"
                                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User
                                    Name</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required/>
                                <label htmlFor="floating_password"
                                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required/>
                                <label htmlFor="floating_repeat_password"
                                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm
                                    password</label>
                            </div>


                            {/*<button id="dropdownButton" data-dropdown-toggle="dropdown"*/}
                            {/*        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
                            {/*        type="button">Dropdown button <svg className="ml-2 w-4 h-4" fill="none"*/}
                            {/*                                           stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                                           xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                            {/*          d="M19 9l-7 7-7-7"/>*/}
                            {/*</svg></button>*/}

                            {/*<div id="dropdown"*/}
                            {/*     className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">*/}
                            {/*    <select className="py-1" aria-labelledby="dropdownButton">*/}
                            {/*        <option>*/}
                            {/*            <span className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Agency</span>*/}
                            {/*        </option>*/}
                            {/*        <option>*/}
                            {/*            <span className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Ecommerce*/}
                            {/*                Business</span>*/}
                            {/*        </option>*/}
                            {/*        <li onSelect={setBusinessCategory("Affiliate Marketing")}>*/}
                            {/*            <a href="#"*/}
                            {/*               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Affiliate*/}
                            {/*                Marketing</a>*/}
                            {/*        </li>*/}
                            {/*        <li onSelect={setBusinessCategory("Tech Business")}>*/}
                            {/*            <a href="#"*/}
                            {/*               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tech*/}
                            {/*                Business</a>*/}
                            {/*        </li>*/}
                            {/*        <li onSelect={setBusinessCategory("Other")}>*/}
                            {/*            <a href="#"*/}
                            {/*               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Other</a>*/}
                            {/*        </li>*/}
                            {/*    </select>*/}
                            {/*</div>*/}

                            {/*<div className="grid xl:grid-cols-2 xl:gap-6">*/}
                            {/*    <div className="relative z-0 mb-6 w-full group">*/}
                            {/*        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone"*/}
                            {/*               id="floating_phone"*/}
                            {/*               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                            {/*            // autoComplete="off"*/}
                            {/*               onChange={(e) => setPhone(e.target.value)}*/}
                            {/*               value={phone}*/}
                            {/*               required/>*/}
                            {/*        <label htmlFor="floating_phone"*/}
                            {/*               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone*/}
                            {/*            number</label>*/}
                            {/*    </div>*/}
                            {/*    <div className="relative z-0 mb-6 w-full group">*/}
                            {/*        <input type="text"*/}
                            {/*               id="floating_company"*/}
                            {/*               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                            {/*            // autoComplete="off"*/}
                            {/*               onChange={(e) => setBrandName(e.target.value)}*/}
                            {/*               value={brand_name}*/}
                            {/*               required/>*/}
                            {/*        <label htmlFor="floating_company"*/}
                            {/*               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand*/}
                            {/*            Name*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="grid xl:grid-cols-2 xl:gap-6">*/}
                            {/*    <div className="relative z-0 mb-6 w-full group">*/}
                            {/*        <input type="url"*/}
                            {/*               id="floating_url"*/}
                            {/*               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                            {/*            // autoComplete="off"*/}
                            {/*               onChange={(e) => setWebsiteUrl(e.target.value)}*/}
                            {/*               value={website_url}*/}
                            {/*               required/>*/}
                            {/*        <label htmlFor="floating_phone"*/}
                            {/*               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website*/}
                            {/*            URL*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="relative z-0 mb-6 w-full group">*/}
                            {/*        <input type="text"*/}
                            {/*               id="floating_address"*/}
                            {/*               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                            {/*            // autoComplete="off"*/}
                            {/*               onChange={(e) => setAddress(e.target.value)}*/}
                            {/*               value={address}*/}
                            {/*               required/>*/}
                            {/*        <label htmlFor="floating_company"*/}
                            {/*               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <button type="submit"
                                    className="mt-4 text-white bg-DarkBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                            </button>
                        </form>

                        <p className="py-8"/>
                    </section>
                )}

                <Script
                    src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"
                    strategy="beforeInteractive"
                />
            </div>
                <div className="basis-2/7"/>
            </div>
            <Footer/>
        </>
    )
}

export default Register