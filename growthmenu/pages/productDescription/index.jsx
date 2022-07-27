import React, { useEffect } from "react";
import { useState } from "react";
import { axiosPrivate } from "../../api/axios";
import Button from "../../components/button/button";
import {useRouter} from "next/router";
import Image from "next/image";



const ProductDescription = () => {
  const router = useRouter();
  const DESCRIPTION_URL = `/api/service/${router.query.id}/description/`;
  const FAQS_URL = `/api/service/${router.query.id}/faq/`;

  const [FAQs, setFAQs] = useState([]);
  const [FAQ, setFAQ] = useState({ question: "", answer: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {

    if(!router.isReady) return;
    const controller = new AbortController();

    async function getFAQs() {
      const faqs_list = await axiosPrivate.get(FAQS_URL, {
        signal: controller.signal,
      });
      const desc = await axiosPrivate.get(DESCRIPTION_URL, {
        signal: controller.signal,
      });
      console.log("desc", desc);
      if (faqs_list.data == true)
        setFAQs(faqs_list.data);
      if (desc.data == true)
        setDescription(desc.data[0].text);
    }
    getFAQs();
  }, [router.isReady]);
  const saveText = async () => {
    console.log("description", description, FAQs);
    const desc = await axiosPrivate.post(
      DESCRIPTION_URL,
      JSON.stringify({ text: description }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const allFaqs = FAQs.map(async (faq) => {
      const faqObj = {
        question: faq.question,
        answer: faq.answer,
      };
      if (faq.id)
        return await await axiosPrivate.put(
          `/api/service/1/faq/${faq.id}/`,
          JSON.stringify(faqObj),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      return await await axiosPrivate.post(FAQS_URL, JSON.stringify(faqObj), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
    await Promise.all(allFaqs);
    router.push({
          pathname: '/blogPost',
          query: { id: router.query.id}
        }
    )
  };
  const handleDeleteFAQ = async (_field) => {

    // await delete_service(_service.id)

    await axiosPrivate.delete(`/api/service/${router.query.id}/faq/${_field.id}/`,
        {
          headers: {
            'Authorization': `JWT ${localStorage.getItem("access")}`
          }
        });

    const existing_fields = FAQs.filter(s => s.id !== _field.id)
    setFAQs(existing_fields)
  };
  const addFAQ = () => {
    setFAQs([...FAQs, { ...FAQ, open: false }]);
    setFAQ({ question: "", answer: "" });
  };

  return (
    <React.Fragment>
      <div className="text-2xl font-semibold pt-3 ">Product Description</div>
      <iframe
        class="w-full h-2/5"
        src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
        frameborder="0"
      ></iframe>
      <div class="grid grid-cols-3 gap-2 flex items-center mt-2">
        <div class="mb-2">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
            class="max-w-full h-auto rounded-lg"
            alt=""
          />
        </div>

        <div class="mb-2">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
            class="max-w-full h-auto rounded-lg"
            alt=""
          />
        </div>

        <div class="mb-2">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
            class="max-w-full h-auto rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="mb-6 w-full">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Add Description
        </label>
        <textarea
          id="address"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Answer"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="mb-6 w-full">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Add FAQ
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Question"
          className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setFAQ({ ...FAQ, question: e.target.value })}
          value={FAQ.question}
        />
        <textarea
          id="address"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Answer"
          onChange={(e) => setFAQ({ ...FAQ, answer: e.target.value })}
          value={FAQ.answer}
        />
      </div>
      <div className="w-32 mt-2">
        <Button
          buttonText={"Add FAQ"}
          backgroundColor={"bg-DarkBlue"}
          textColor={"text-white"}
          onClick={addFAQ}
        />
      </div>
      {FAQs.map((faq, index) => {
        return (
          <div data-active-classes="bg-blue-100 dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 text-blue-600 dark:text-white">
            {/* <h2 id="accordion-color-heading-1"> */}
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200   dark:focus:ring-blue-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-800 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
              onClick={() => {
                const faq = FAQs;
                faq[index].open = !faq[index].open;
                setFAQs([...faq]);
              }}
            >
              <span contentEditable={isEdit}>{faq.question}?</span>
              <svg
                data-accordion-icon=""
                class="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* </h2> */}
            {faq.open === true && (
              <div class="p-5 font-light border border-b-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <div
                  class=" text-gray-500 dark:text-gray-400"
                  contentEditable={isEdit}
                >
                  {faq.answer}
                </div>
              </div>
            )}

            <button className="cursor-pointer hover:animate-bounce"
                    type="button"
                    onClick={() => {
                      handleDeleteFAQ(faq)
                    }}>
              <Image
                  src="/images/delete.png"
                  alt=""
                  height="20px"
                  width="20px"
              />
            </button>

          </div>
        );
      })}

      <div className="flex mt-2 float-right">
        <div className="w-24 mr-2 float-right">
          <Button
            buttonText={"Edit"}
            backgroundColor={"bg-DarkBlue"}
            textColor={"text-white"}
            onClick={() => setIsEdit(true)}
          />
        </div>
        <div className="w-32 ">
          <Button
            buttonText={"Save"}
            backgroundColor={"bg-DarkBlue"}
            textColor={"text-white"}
            onClick={saveText}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDescription;
