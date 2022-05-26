import {useRef, useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';

import axios from "../api/axios";
import Router from "next/router";

import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer";
import Image from "next/image";

const LOGIN_URL = '/auth/jwt/create/';

const Login = () => {
    const {setAuth} = useAuth();

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    // withCredentials: true
                }
            );
            const accessToken = response?.data?.access;

            setAuth({username, password, accessToken});
            Router.push("/order-list/");

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <Navbar/>
            <Breadcrumb/>
            <div className="flex flex-row">
                <div className="px-48 py-8 basis-3/7">
                    <Image src="/images/business.svg" width={450} height={450}/>
                </div>
                <div className="basis-2/7 py-12 px-4">
                    <section>
                        <p ref={errRef} className="">{errMsg}</p>
                        <form onSubmit={handleSubmit} className="relative z-0 mb-6 w-full group">
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="username"
                                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                <input type="text"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       id="username"
                                       ref={userRef}
                                       autoComplete="off"
                                       onChange={(e) => setUsername(e.target.value)}
                                       value={username}
                                       required
                                />

                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <label htmlFor="password"
                                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                <input
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                            </div>
                            <button type="Sign In"
                                    className="mt-4 text-white bg-DarkBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                            </button>
                        </form>

                        <p className="py-8"/>
                    </section>
                </div>
                <div className="basis-2/7"/>
            </div>
            <Footer/>
        </>
    )
}

export default Login