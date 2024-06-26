import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  console.log(props);
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (box) => box._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter(
    (letter) => Number(letter.mailboxId) === Number(mailboxId)
  );
  console.log(selectedLetters);
  return (
    <>
      <section>
        <h1>Mailbox {selectedBox._id}</h1>
        <h2>Details</h2>
        <p>Boxholder: {selectedBox.name}</p>
        <p>Box Size: {selectedBox.size}</p>
      </section>

      <section>
        <h2>Letters</h2>
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <p>Dear {letter.recipient},</p>
              <p>{letter.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MailboxDetails;
