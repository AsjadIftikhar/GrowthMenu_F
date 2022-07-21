import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "../api/axios";

import Dropdown from "./dropdown/dropdown";

const PROFILE_URL = "/auth/customers/";

function Profile_Component(props) {
  const router = useRouter();

  //Select Dropdown Fields

  const CATEGORY_CHOICES = [
    { value: "Agency", label: "Agency" },
    { value: "Ecommerce Business", label: "Ecommerce Business" },
    { value: "Affiliate Marketing", label: "Affiliate Marketing" },
    { value: "Tech Business", label: "Tech Business" },
    { value: "Other", label: "Other" },
  ];

  // User Fields
  const [id, setId] = useState(router.query.id);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Profile Fields
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [brand_name, setBrandName] = useState("");
  const [business_category, setBusinessCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [website_url, setWebsiteUrl] = useState("");
  const [address, setAddress] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleDropdown = (value) => {
    setBusinessCategory({ value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        PROFILE_URL,
        JSON.stringify({
          user: id,
          first_name,
          last_name,
          brand_name,
          business_category,
          phone,
          website_url,
          address,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess(true);

      await router.push("/login");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <div className="bg-LightGrey">
      <h2 className="text-4xl font-semibold py-2 text-gray-800">My Account</h2>
      <div className="flex flex-row bg-white drop-shadow-lg rounded-lg">
        <div className="basis-1/4 px-8 border-r-2 border-gray-300">
          <h3 className="text-xl font-semibold py-6">Preferences</h3>
          <span className="text-sm text-gray-600">Notifications</span>
          <div>
            <label
              htmlFor="checked-toggle"
              className="relative inline-flex items-center my-4 cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="checked-toggle"
                className="sr-only peer"
                checked
              />
              <div
                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
                                peer-focus:ring-DarkBlue peer-checked:after:translate-x-full
                                peer-checked:after:border-white after:content-[''] after:absolute
                                after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border
                                after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-DarkBlue"
              />
            </label>
          </div>

          <span className="text-sm text-gray-600">Language</span>
          <div className="py-4">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-gray-700 bg-transparent border-2 border-gray-300 hover:bg-LightGrey
                                 font-medium rounded-full text-sm px-4 py-2
                                text-center inline-flex items-center"
              type="button"
            >
              English
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <span className="text-sm text-gray-600">Visibility</span>
          <div>
            <div className="flex my-4">
              <div className="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-DarkBlue bg-gray-100 border-gray-300 focus:ring-DarkBlue
                                        focus:ring-2"
                />
                <label
                  htmlFor="inline-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  On
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-DarkBlue bg-gray-100 border-gray-300 focus:ring-DarkBlue
                                        focus:ring-2 "
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Off
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/4 px-16 ">
          <h3 className="text-xl font-semibold py-6">Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-16">
              <div className="mb-6 w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={first_name}
                  required
                />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setLastName(e.target.value)}
                  value={last_name}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="brand_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brand_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setBrandName(e.target.value)}
                  value={brand_name}
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <label className="block mb-2 text-sm text-gray-900">
                  Business Category
                </label>

                <Dropdown
                  value={business_category}
                  data={CATEGORY_CHOICES}
                  placeholder={"Select Category"}
                  styleClass={
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm " +
                    "rounded-lg focus:ring-blue-500 focus:border-blue-500 block " +
                    "w-full p-2.5 inline-flex justify-end"
                  }
                  onChange={handleDropdown}
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-16">
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-16">
              <div className="mb-6 w-full">
                <label
                  htmlFor="phone_number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  value={website_url}
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-16">
              <div className="mb-6 w-full">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
                                          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-16">
              <div className="relative z-0 mt-6 mb-6 w-full group">
                <a
                  href="#"
                  className="text-blue-800 text-xl text-center w-full hover:underline"
                >
                  Deactivate Account
                </a>
              </div>
              <div className="mb-6 w-full">
                <button
                  type="submit"
                  className="mt-6 text-white bg-DarkBlue hover:bg-blue-800 focus:ring-4
                                        focus:ring-blue-300 font-medium rounded-full w-3/4 px-16 py-3 text-center"
                >
                  Update Settings
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile_Component;
