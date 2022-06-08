import { useState } from 'react';
import Link from "next/link";

function Navbar(props) {

    const [mobile, setMobile] = useState('hidden');

    return (
        <>
            <nav className="bg-white px-4 py-6">
                <div className="container flex flex-col space-y-2
                md:flex-row md:flex-wrap md:justify-around md:items-center md:mx-auto">
                    <Link href="/">
                        <span
                            className="text-2xl font-semibold text-DarkBlue cursor-pointer">
                          Growth
                          <span className="text-LightBlue">Menu</span>
                        </span>
                    </Link>
                    <div className="flex flex-col
                          md:flex-row md:order-2">
                        <Link href="/login">
                          <span className="mr-3 py-2 md:py-1 text-DarkBlue font-bold cursor-pointer">
                            Login
                          </span>
                        </Link>
                        <span className="md:border border-gray-300"/>
                        <Link href="/register">
                          <span
                              className="bg-white border border-gray-500 rounded-full
                              text-gray-800 text-sm
                              md:ml-3 px-4 py-2 md:w-full w-2/3
                              hover:bg-gray-100
                              cursor-pointer">
                            Register
                          </span>
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-gray-100"
                        onClick={() => {
                            setMobile((mobile === 'hidden') ? "" : "hidden")
                        }}>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div
                        className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${mobile}`}
                        id="mobile-menu">
                        <ul className="flex flex-col md:flex-row md:space-x-12 ">
                            <li>
                                <Link href="#">
                                    <span
                                        className="mt-2 p-2 text-gray-700 hover:bg-gray-100 md:hover:text-blue-700
                                        cursor-pointer">
                                        Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="mt-2 p-2 text-gray-700 hover:bg-gray-100 md:hover:text-blue-700
                                          cursor-pointer">
                                        Our Services</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="mt-2 p-2 text-gray-700 hover:bg-gray-100 md:hover:text-blue-700
                                          cursor-pointer">
                                        Case Studies</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span
                                        className="mt-2 p-2 text-gray-700 hover:bg-gray-100 md:hover:text-blue-700
                                        cursor-pointer">
                                        Resources</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span
                                        className="mt-2  p-2 text-gray-700 hover:bg-gray-100 md:hover:text-blue-700
                                        cursor-pointer">
                                        Blog</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
