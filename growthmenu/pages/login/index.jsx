//React Imports
import {useState, useEffect} from 'react';

//NEXT Imports
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";

// Custom Imports
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer/footer";

import {login} from "../../services/userServices"

//Component
const Login = () => {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login({username, password})
            router.push('/order/');
        } catch (ex) {
            if (ex.response && (ex.response.status === 400 || ex.response.status === 401)) {
                const err = [...errors]
                err.push(ex.response.data.detail)
                setErrors(err)
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

                        {/*Errors*/}
                        {errors.map((err, index) => (
                            <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
                                 role="alert"
                                 key={index}>
                                <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor"
                                     viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                          clipRule="evenodd"/>
                                </svg>
                                <div>
                                    <span className="font-medium">Error!</span> {err}
                                </div>
                            </div>
                        ))}
                        {/*End Errors*/}

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
                                    className="flex py-2 justify-end w-3/4 font-medium text-blue-600
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