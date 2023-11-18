import React, { useState } from "react";

const bgImage = () => {
  return;
};

export default function login() {
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

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log(formState);
  //     try {
  //       const response = await fetch("http://localhost:8080/api2", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formState),
  //       });

  //       const data = await response.json();

  //       console.log("Form submitted successfully:", data);
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Log the form data to the console
    console.log("Form submitted with data:", formState);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen login-bg "></div>
      <div className=" w-screen flex flex-col items-center py-16">
        <h1 className="text-5xl font-semibold mt-20 text-white">Join Us</h1>
        <form onSubmit={handleSubmit} className="mt-10 w-[400px]">
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="font-semibold text-white">
              email
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              id=""
              placeholder="email"
              className="border-[1px] p-2 rounded-md"
            />
            <label htmlFor="password" className="font-semibold text-white">
              password
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="password"
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
