import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Mailboxes from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {
  const navigate = useNavigate();

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
    navigate("/mailboxes");
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="mailboxes" element={<Mailboxes mailboxes={mailboxes} />} />
        <Route path="new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
