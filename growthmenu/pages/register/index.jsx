import {useState, useEffect} from "react";

import axios from '../api/axios';
import {useRouter} from "next/router";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer";
import Image from "next/image";

const REGISTER_URL = '/auth/users/';

const Register = () => {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matchPwd, setMatchPwd] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== matchPwd) {
            setErrMsg("Passwords Do Not Match");
            return;
        }
        try {
            let response = await axios.post(REGISTER_URL,
                JSON.stringify({email, password}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            setSuccess(true);

            setEmail('');
            setPassword('');
            setMatchPwd('');

            await router.push(`/register/${response.data.id}`);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        }
    }

    return (
        <>
            <Navbar/>
            <Breadcrumb/>
            <div className="container grid md:grid-cols-2 mx-auto ">
                <div className="hidden md:block flex justify-center pb-12">
                    <Image src="/images/business.svg" width={450} height={450}/>
                </div>
                <div className="p-4 md:pt-0 md:pb-12">
                    <section>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="mb-4">
                                <label htmlFor="floating_email"
                                       className="block mb-2 text-sm font-medium text-gray-900">Email
                                    address</label>
                                <input type="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900
                                       focus:ring-blue-500 focus:border-blue-500 block p-2 w-3/4"
                                       id="email"
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}
                                       required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    focus:ring-blue-500 focus:border-blue-500 block p-2 w-3/4"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirm_pwd"
                                       className="block mb-2 text-sm font-medium text-gray-900">Confirm
                                    password</label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    focus:ring-blue-500 focus:border-blue-500 block p-2 w-3/4"
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required/>

                            </div>
                            <button type="submit"
                                    className="mt-8 text-white bg-DarkBlue hover:bg-blue-800
                                    focus:ring-4 focus:ring-blue-300 w-3/4 px-16 py-2.5 text-center">
                                Submit
                            </button>
                        </form>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register