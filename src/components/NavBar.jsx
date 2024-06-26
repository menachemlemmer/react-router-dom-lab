import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="mailboxes">Mailboxes</Link>
        </li>
        <li>
          <Link to="/new-mailbox">New Mailbox</Link>
        </li>
        {props.mailboxes.length > 0 && (
          <li>
            <Link to="/new-letter">New Letter</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
