import React, { useState } from "react";
import {
  Card,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  TextInput,
} from "@tremor/react";

import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

const UserForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    mob: "",
  });

  const handleInputChange = (e) => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[40vw]">
      <label htmlFor="name">
        <TextInput
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="address">
        <TextInput
          type="text"
          name="address"
          id="address"
          placeholder="address"
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
      <label htmlFor="password">
        <TextInput
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="confirmPassword">
        <TextInput
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className="btn text-white">
        Submit
      </button>
    </form>
  );
};
const CompanyForm = () => {
  const [formState, setFormState] = useState({
    CompanyName: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[40vw]">
      <label htmlFor="CompanyName" className="font-semibold ">
        <TextInput
          onChange={handleInputChange}
          type="text"
          name="CompanyName"
          id=""
          placeholder="CompanyName"
        />
      </label>
      <label htmlFor="address" className="font-semibold ">
        <TextInput
          onChange={handleInputChange}
          type="text"
          name="address"
          id=""
          placeholder="address"
        />
      </label>
      <label htmlFor="mobile" className="font-semibold ">
        <TextInput
          onChange={handleInputChange}
          type="text"
          name="mobile"
          id=""
          placeholder="mobile"
        />
      </label>
      <label htmlFor="email" className="font-semibold ">
        <TextInput
          onChange={handleInputChange}
          type="text"
          name="email"
          id=""
          placeholder="email"
        />
      </label>
      <label htmlFor="password" className="font-semibold ">
        <TextInput
          onChange={handleInputChange}
          type="text"
          name="password"
          id=""
          placeholder="password"
        />
      </label>

      <button type="submit" className="btn text-white">
        Submit
      </button>
    </form>
  );
};

export const TabExample = () => {
  return (
    <Card className="w-max">
      <Text className="font-bold text-3xl">Verify Yourself</Text>
      <TabGroup>
        <TabList className="mt-8">
          <Tab icon={UserGroupIcon}>USER</Tab>
          <Tab icon={UserIcon}>COMPANY</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserForm />
          </TabPanel>
          <TabPanel>
            <CompanyForm />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default function AdvanceRegistration() {
  return (
    <div className="">
      <div>
        <h1>Verify Your Company</h1>
      </div>
      <TabExample />
    </div>
  );
}
