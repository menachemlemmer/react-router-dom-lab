import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Mailboxes from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import LetterForm from "./components/LetterForm";

const App = () => {
  const navigate = useNavigate();

  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
    navigate("/mailboxes");
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar mailboxes={mailboxes} />
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
        <Route
          path="mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </>
  );
};

export default App;
