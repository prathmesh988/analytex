import React, { useState } from "react";

export default function InitiativeForm() {
  const [formState, setFormState] = useState({
    nameofevent: "",
    organising_committee: "",
    email: "",
    mob: "",
    date: "",
    time: "",
    venue: "",
    city: "",
    motive: "",
    capacity: "",
    description_of_the_event: "",
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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="nameofevent">
        <input
          type="text"
          name="nameofevent"
          id="CompannameofeventyName"
          placeholder="name of event"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="organising_committee">
        <input
          type="text"
          name="organising_committee"
          id="organising_committee"
          placeholder="organising_committee"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="mob">
        <input
          type="text"
          name="mob"
          id="mob"
          placeholder="mob"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="date">
        <input
          type="text"
          name="date"
          id="date"
          placeholder="date"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="time">
        <input
          type="text"
          name="time"
          id="time"
          placeholder="time"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="venue">
        <input
          type="text"
          name="venue"
          id="venue"
          placeholder="venue"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="city"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="motive">
        <input
          type="text"
          name="motive"
          id="motive"
          placeholder="motive"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="capacity">
        <input
          type="text"
          name="capacity"
          id="capacity"
          placeholder="capacity"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
