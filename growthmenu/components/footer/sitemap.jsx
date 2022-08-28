import React from 'react';
import Link from "next/link";

function Sitemap(props) {
    return (
        <div className="grid grid-cols-1 gap-2 py-2 px-4 md:grid-cols-5 md:place-content-center">
            <div className="md:p-8">
                <Link href="/">
                        <span
                            className="text-3xl font-semibold text-white cursor-pointer">
                          Growth
                          <span className="text-LightBlue">Menu</span>
                        </span>
                </Link>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Our Links</h2>
                <ul className="text-gray-300">
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Home</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">About Us</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Services</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Team</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Blog</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Our Company</h2>
                <ul className="text-gray-300">
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">About Company</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Our Testimonials</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Latest News</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Our Mission</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Get a free Quote</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Our Services</h2>
                <ul className="text-gray-300">
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">App Development</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Web Development</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Graphic Design</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">Web Solution</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">App Design</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact</h2>
                <ul className="text-gray-300">
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">9th Floor,</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">16 Great Queen Street,</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">London England</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            <span className="hover:underline">WC2B 5DG</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sitemap;