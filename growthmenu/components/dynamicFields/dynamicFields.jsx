import React from "react";
import Dropdown from "../dropdown/dropdown";

const DynamicFields = ({ field, onSelect }) => {
  const onChange = (value) => {
    onSelect(value);
  };
  const handleUploadImage = (event) => {
    onSelect(event.target.files[0]);
  };
  const showInput = () => {
    switch (field.type) {
      case "textField":
        return (
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => onChange(e.target.value)}
            // value={last_name}
          />
        );
      case "numberField":
        return (
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            // onChange={(e) => setLastName(e.target.value)}
            // value={last_name}
          />
        );

      case "dropDown":
        return (
          <Dropdown
            // value={business_category}
            data={[]}
            // placeholder={"Select Category"}
            styleClass={
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 inline-flex justify-end"
            }
            // onChange={handleDropdown}
          />
        );
      case "textArea":
        return (
          <textarea
            className={
              "w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            }
            // value={value}
            // onChange={(e) => onClick(e.target.value)}
          />
        );
      case "imageField":
        return (
          <input
            type="file"
            id="avatar"
            onChange={handleUploadImage}
            name="avatar"
          ></input>
        );
      case "fileField":
        return (
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={handleUploadImage}
          />
        );

      default:
        return;
    }
  };
  return (
    <div className={`mb-2 mr-8 ${field.label === "textArea" ? "w-full" : ""}`}>
      <label
        htmlFor="last_name"
        className="block mb-2  text-sm font-medium text-gray-900"
      >
        {field.label}
      </label>
      {showInput()}
    </div>
  );
};

export default DynamicFields;
