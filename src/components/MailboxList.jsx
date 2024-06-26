import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li className="mail-box" key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
