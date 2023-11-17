import React, { useState } from "react";

export default function FeedbackForm() {
  const [formState, setFormState] = useState({
    feedback: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback">
        <input
          type="text"
          name="feedback"
          id="feedback"
          placeholder="feedback"
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </label>
    </form>
  );
}
