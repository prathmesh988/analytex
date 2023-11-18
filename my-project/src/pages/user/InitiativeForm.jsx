import React, { useState } from "react";
import { TextInput } from "@tremor/react";

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
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex  gap-2">
          <label htmlFor="nameofevent">
            <TextInput
              type="text"
              name="nameofevent"
              id="CompannameofeventyName"
              placeholder="name of event"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="organising_committee">
            <TextInput
              type="text"
              name="organising_committee"
              id="organising_committee"
              placeholder="organising_committee"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label htmlFor="email">
          <TextInput
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="mob">
          <TextInput
            type="text"
            name="mob"
            id="mob"
            placeholder="mob"
            onChange={handleInputChange}
          />
        </label>
        <div className="flex gap-2">
          <label htmlFor="date">
            <TextInput
              type="text"
              name="date"
              id="date"
              placeholder="date"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="time">
            <TextInput
              type="text"
              name="time"
              id="time"
              placeholder="time"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label htmlFor="venue">
          <TextInput
            type="text"
            name="venue"
            id="venue"
            placeholder="venue"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="city">
          <TextInput
            type="text"
            name="city"
            id="city"
            placeholder="city"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="motive">
          <TextInput
            type="text"
            name="motive"
            id="motive"
            placeholder="motive"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="capacity">
          <TextInput
            type="text"
            name="capacity"
            id="capacity"
            placeholder="capacity"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
