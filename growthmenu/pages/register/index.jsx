import {useState, useEffect} from "react";

import {useRouter} from "next/router";
import Image from "next/image";

import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer";

import {login, register} from "../../services/userServices"


const Register = () => {
    const router = useRouter()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matchPwd, setMatchPwd] = useState('');

    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== matchPwd) {
            const err = [...errors]
            err.push("Passwords Do Not Match")
            setErrors(err);
        }
        else {
            try {
                const response = await register({username, email, password})
                if (response.status === 201) {

                    await login({username, password})

                    setSuccess(true);
                    setEmail('');
                    setPassword('');
                    setMatchPwd('');

                    router.push(`/register/${response.data.id}`);

                }

            } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                    const err = [...errors]
                    err.push(ex.response.data)
                    setErrors(err)
                }
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

                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="mb-4">
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900">User
                                    Name</label>
                                <input type="text"
                                       className="bg-gray-50 border border-gray-300 text-gray-900
                                       focus:ring-blue-500 focus:border-blue-500 block p-2 w-3/4"
                                       id="username"
                                       onChange={(e) => setUsername(e.target.value)}
                                       value={username}
                                       required/>
                            </div>
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