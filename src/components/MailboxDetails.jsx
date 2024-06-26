import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  console.log(props);
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (box) => box._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );
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
      </section>
    </>
  );
};

export default MailboxDetails;
