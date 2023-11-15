import React from "react";

export default function FeedbackForm() {
  const [formState, setFormState] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <label htmlFor="subject">
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formState.subject}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          value={formState.message}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
