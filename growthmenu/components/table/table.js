import React from "react";
import Button from "../button/button"

const Table = () => {
    return (
        <div className=" w-full">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-white ">
                    <tr>
                        <th scope="col" className="py-4 pl-4 pr-2">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-2 py-3">
                            #ID
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Order Date
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Service
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Requirements
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Payment Date
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Delivery Date
                        </th>
                        <th scope="col" className="px-2 py-3">
                            <span className="sr-only"></span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr><tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr><tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr><tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr><tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr><tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 py-4 pr-2 pl-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-2 py-4">
                            123456789
                        </th>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-center">
                            <a href="#" className="font-medium text-DarkBlue dark:text-DarkBlue underline">View</a>

                        </td>
                        <td className="px-2 py-4">
                            Product Description
                        </td>
                        <td className="px-2 py-4 text-left">
                            <div className="w-24">
                                <Button backgroundColor={"bg-Green"} borderRadius="rounded-xl" buttonText="Completed"
                                        textColor={"text-white"}/>
                            </div>
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4">
                            March 24 2018
                        </td>
                        <td className="px-2 py-4 text-right">
                            <div className="flex justify-between">
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Yellow_2"} borderRadius="rounded-xl"
                                            buttonText="Refund" textColor={"text-white"}/>
                                </div>
                                <div className="w-24">
                                    <Button backgroundColor={"bg-Red"} borderRadius="rounded-xl" buttonText="Cancel"
                                            textColor={"text-white"}/>
                                </div>
                            </div>
                        </td>
                    </tr>



                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Table