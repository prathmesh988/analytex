import React, { useState } from "react";

const bgImage = () => {
  return;
};

export default function Registration() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen login-bg "></div>
      <div className=" w-screen flex flex-col items-center py-16">
        <h1 className="text-5xl font-semibold mt-20">Join Us</h1>
        <form action="" className="mt-10 w-[400px]">
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="font-semibold ">
              Email
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              id=""
              placeholder="email address"
              className="border-[1px] p-2 rounded-md"
            />
            <label htmlFor="email" className="font-semibold ">
              Password
            </label>
            <input
              type="text"
              name="Password"
              id=""
              placeholder="password"
              className="border-[1px] p-2 rounded-md"
            />
            <button type="submit" className="btn">
              Continue with Email
            </button>
          </div>
          <p className="text-gray-500 text-center pt-4">
            AnalyteX is one stop solution to all pollution related information
          </p>
        </form>
      </div>
    </>
  );
}
