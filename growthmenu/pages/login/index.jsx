//React Imports
import {useState, useEffect} from 'react';

//NEXT Imports
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";

// Custom Imports
import axios from "../api/axios";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer";
import useAuth from '../../hooks/useAuth';

//URLS used by the component
const LOGIN_URL = '/auth/jwt/create/';

//Component
const Login = () => {
    const {setAuth} = useAuth();
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                }
            );
            const accessToken = response?.data?.access;

            setAuth({username, password, accessToken});
            await router.push('/order-list/');

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
        }
    }

    return (
        <>
            <Navbar/>
            <Breadcrumb/>
            <div className="container grid md:grid-cols-2 mx-auto ">
                <div className="flex justify-center pb-12">
                    <Image src="/images/business.svg" width={450} height={450}/>
                </div>
                <div className="p-4 md:pt-12 md:pb-12">
                    <section>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="text"
                                       className="bg-white border border-gray-300 text-gray-900
                                       focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-3 drop-shadow"
                                       id="username"
                                       autoComplete="off"
                                       onChange={(e) => setUsername(e.target.value)}
                                       value={username}
                                       required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input
                                    className="bg-white border border-gray-300 text-gray-900
                                    focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-3 drop-shadow"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                <span
                                    className="flex justify-end w-3/4 font-medium text-blue-600
                                    hover:underline dark:text-blue-500">
                                    <Link href="#">
                                        Forgot Password?
                                    </Link>
                                </span>
                            </div>
                            <button type="Sign In"
                                    className="mt-4 text-white bg-DarkBlue
                                    hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md
                                    drop-shadow-lg w-3/4 px-16 py-2.5 text-center">Submit
                            </button>
                        </form>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login