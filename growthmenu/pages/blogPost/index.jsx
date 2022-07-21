import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../components/button/button";
import Dropdown from "../../components/dropdown/dropdown";
import DynamicFields from "../../components/dynamicFields/dynamicFields";
import { axiosPrivate } from "../api/axios";

const INPUT_CHOICES = [
  { value: "textField", label: "textField" },
  // { value: "textArea", label: "textArea" },
  // { value: "dropDown", label: "dropdown" },
  // { value: "numberField", label: "numberField" },
  { value: "imageField", label: "image" },
  { value: "fileField", label: "file" },
];
const PLACE_ORDER_URL = "/api/service/1/requirement/";

const CreateBlog = () => {
  const [selectedFields, setSelectedFields] = useState([]);
  const [label, setLabel] = useState("");
  const [field, setField] = useState("");
  const router = useRouter();

  const handleDropdown = (value) => {
    console.log("event", value);
    setField(value);
  };

  const addField = (value) => {
    if (label && field) {
      setSelectedFields([...selectedFields, { type: field, label: label }]);
      setLabel("");
    }
  };

  const saveFields = async (e) => {
    e.preventDefault();

    const response = await axiosPrivate.post(
      PLACE_ORDER_URL,
      JSON.stringify(selectedFields),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("responsee", response);
    router.push("/blogPostDetails/");
  };
  console.log("value", selectedFields);
  return (
    <React.Fragment>
      <div className="flex justify-between items-center pt-3">
        <div className="text-2xl font-semibold">Create a Blog Post</div>
        <div className=" flex ">
          <div className="w-36 mr-2">
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="enter a field label"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => setLabel(e.target.value)}
              value={label}
            />
          </div>
          <div className="w-36 mr-2">
            <Dropdown
              value={field}
              data={INPUT_CHOICES}
              placeholder={"Select Input Field"}
              styleClass={
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm " +
                "rounded-lg focus:ring-blue-500 focus:border-blue-500 block " +
                "w-full p-2.5 inline-flex justify-end"
              }
              onChange={handleDropdown}
            />
          </div>
          <div>
            <Button
              buttonText={"Add Field"}
              backgroundColor={"bg-DarkBlue"}
              textColor={"text-white"}
              onClick={addField}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {selectedFields.map((field, index) => (
          <DynamicFields key={field + index} field={field} />
        ))}
      </div>
      {selectedFields.length > 0 && (
        <div className="w-48 float-right	">
          <Button
            buttonText={"Save Field"}
            backgroundColor={"bg-DarkBlue"}
            textColor={"text-white"}
            onClick={saveFields}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default CreateBlog;
