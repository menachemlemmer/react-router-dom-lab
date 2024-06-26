const MailboxList = (props) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li className="mail-box" key={mailbox._id}>
            Mailbox {mailbox._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
