import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GiShield } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <GiShield className="logoIcon" />

        <h2>Surakshita</h2>

      </div>

      <ul className="navLinks">

        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="#">Features</a>
        </li>

        <li>
          <a href="#">How It Works</a>
        </li>

        <li>
          <a href="#">About Us</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>

      </ul>

      <button className="sosButton">

        <FaPhoneAlt />

        Emergency SOS

      </button>

    </nav>
  );
}

export default Navbar;