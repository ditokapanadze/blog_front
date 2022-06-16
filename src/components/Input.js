import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ErrorMessage, useField } from "formik";

function Input({
  label,
  revealpass,
  revealrepass,
  showRepass,
  showPass,
  ...props
}) {
  const [field] = useField(props);

  const renderIcon = () => {
    if (props.name === "password" && !showPass) {
      return (
        <AiFillEyeInvisible
          className="text-blue-700"
          style={{ fontSize: "20px" }}
        />
      );
    } else if (props.name === "password" && showPass) {
      return (
        <AiFillEye className="text-blue-700" style={{ fontSize: "20px" }} />
      );
    }
  };
  const renderSecondIcon = () => {
    if (props.name === "repassword" && !showRepass) {
      return (
        <AiFillEyeInvisible
          className="text-blue-700"
          style={{ fontSize: "20px" }}
        />
      );
    } else if (props.name === "repassword" && showRepass) {
      return (
        <AiFillEye className="text-blue-700" style={{ fontSize: "20px" }} />
      );
    }
  };
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        for="username"
      >
        {label}
      </label>
      <div className="flex relative items-center">
        <input
          className={`shadow relative appearance-none border rounded w-full py-2 px-3 ${
            props.name === "password" && "pr-10"
          } text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          {...props}
          {...field}
        />
        <div
          className=" bg-white absolute right-2  ml-2 cursor-pointer"
          onClick={() => {
            if (props.name === "password") {
              revealpass();
            } else if (props.name === "repassword") {
              revealrepass();
            }
          }}
        >
          {props.name === "password" ? renderIcon() : renderSecondIcon()}
        </div>
      </div>{" "}
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-red-500 text-xs italic mb-2"
      />{" "}
    </div>
  );
}

export default Input;
