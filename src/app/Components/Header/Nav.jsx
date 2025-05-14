import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has">
        <Link href="/">Home</Link>
      </li>

      <li className="menu-item-has">
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li className="menu-item-has">
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
      <li className="menu-item-has">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Service
        </Link>
      </li>
    </ul>
  );
}
