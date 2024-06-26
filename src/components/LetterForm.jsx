import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mailboxId: "1",
    recipient: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addLetter(form);
    setForm({ mailboxId: "1", recipient: "", message: "" });
    navigate(`/mailboxes/${form.mailboxId}`);
  }

  return (
    <div>
      <h2>Compose a Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox: </label>
        <select id="mailboxId" name="mailboxId" onChange={handleChange}>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient: </label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={form.value}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          rows="4"
          cols="50"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default LetterForm;
