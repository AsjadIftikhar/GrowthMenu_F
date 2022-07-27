import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/button/button";
import DynamicFields from "../../components/dynamicFields/dynamicFields";
import { axiosPrivate } from "../api/axios";
import {useRouter} from "next/router";

const BlogPostDetails = () => {
  const router = useRouter();
  const GET_SERVICE_REQUESTS = `/api/service/${router.query.id}/requirement/`;
  const [services, setServices] = useState([]);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    async function getOrders() {
      const services = await axiosPrivate.get(GET_SERVICE_REQUESTS, {
        signal: controller.signal,
      });
      console.log(services);
      setServices(services.data);
      // isMounted && setOrders(order_list.data);
    }

    getOrders();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const onSelect = (value, service, index) => {
    const selectedService = [...services];
    if (service.type === "textField") {
      selectedService[index].text_field["text"] = value;
    }
    else if (service.type === "imageField"){
      // formData.append("upload_image", value);
      selectedService[index].image_field["upload_image"] = value;
    }
    else{
      selectedService[index].file_field["upload_file"] = value;
    }
    setServices(selectedService);
  };
  const saveOrders = async () => {
    console.log("services", services);
    const pendingService = services.map(async (service) => {
      console.log(service.image_field);
      if (service.type === "textField")
        return await axiosPrivate.put(
          `/api/service/${router.query.id}/requirement/${service.id}/`,
          JSON.stringify({ text: service.text_field.text }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

      else if (service.type === "imageField") {
        let formData = new FormData();
        formData.append("upload_image", service.image_field["upload_image"]);
        return await axiosPrivate.put(
            `/api/service/${router.query.id}/requirement/${service.id}/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        );
      }
      let formData = new FormData();
      formData.append("upload_file", service.file_field["upload_file"]);
      return await axiosPrivate.put(
          `/api/service/${router.query.id}/requirement/${service.id}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
      );
    });
    await Promise.all(pendingService);
  };
  return (
    <React.Fragment>
      <div className="pt-3">
        {/* <div className="flex justify-between items-center pt-3">
          <div className="text-2xl font-semibold">
            Blog Writing Project Details
          </div>
          <div className=" flex ">
            <div className="w-36 mr-2">
              Sub Total: GBP $20 / APPROX USD $20.20 Estimated Completion :
            </div>
          </div>
        </div> */}
        <div></div>
        <label
          htmlFor="last_name"
          className="block mb-2  text-sm font-medium text-gray-900"
        >
          How many blog posts you would like?
        </label>
        <div className="flex items-center">
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setTotal(e.target.value)}
            value={total}
          />
          <Button
            buttonText={"Add Posts"}
            backgroundColor={"bg-DarkBlue"}
            textColor={"text-white"}
            onClick={() => {
              const arr = [];
              if (total >= 0) {
                for (const i = 0; i < total; i++) {
                  arr.push(i);
                }
              }
              setPosts(arr);
            }}
          />
        </div>
        {console.log("posts", posts)}
        {posts.map((p, index) => (
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2  text-sm font-medium text-gray-900"
            >
              project # {index + 1}
            </label>
            <div className="flex flex-wrap ">
              {services.map((service, index) => {
                return (
                  <DynamicFields
                    key={service + index}
                    field={service}
                    onSelect={(value) => onSelect(value, service, index)}
                  />
                );
              })}
            </div>
          </div>
        ))}
        <div className="w-48 float-right	">
          <Button
            buttonText={"Save Post"}
            backgroundColor={"bg-DarkBlue"}
            textColor={"text-white"}
            onClick={saveOrders}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPostDetails;
