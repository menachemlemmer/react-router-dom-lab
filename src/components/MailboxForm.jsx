import { useState } from "react";

const MailboxForm = (props) => {
  const [form, setForm] = useState({ name: "", size: "small" });
  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addBox(form);
    setForm({ name: "", size: "small" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Mailbox</h2>
      <label htmlFor="name">Enter a Boxholder: </label>
      <input type="text" id="name" value={form.name} onChange={handleChange} />
      <label htmlFor="size">Select a Box Size: </label>
      <select id="size" name="size" value={form.size} onChange={handleChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm;
