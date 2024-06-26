import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (box) => box._id === Number(mailboxId)
  );
  return (
    <section>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.name}</p>
      <p>Box Size: {selectedBox.size}</p>
    </section>
  );
};

export default MailboxDetails;
