import React from "react";

export default function AdvanceRegistration() {
  const [formState, setFormState] = useState({
    CompanyName: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorState, setErrorState] = useState({
    CompanyName: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <label htmlFor="CompanyName">
        <input
          type="text"
          name="CompanyName"
          id="CompanyName"
          placeholder="Company Name"
          value={formState.CompanyName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="address">
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={formState.address}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="mobile">
        <input
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Mobile"
          value={formState.mobile}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="confirmPassword">
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formState.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
