import Link from 'next/link';
import DropDown from './DropDown';

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
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
      <li className="menu-item-has">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Service
        </Link>
      </li>
      

    
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog Light
              </Link>
            </li>
            <li>
              <Link href="/blogdark" onClick={() => setMobileToggle(false)}>
                Blog Dark
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details-right"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Right
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details-center"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Center
              </Link>
            </li>
            <li>
              <Link
                href="/blogdark/blog-details-dark"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left Dark
              </Link>
            </li>
            <li>
              <Link
                href="/blogdark/blog-details-right-dark"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Right Dark
              </Link>
            </li>
            <li>
              <Link
                href="/blogdark/blog-details-center-dark"
                onClick={() => setMobileToggle(false)}
              >
                Blog Detail Center Dark
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
    </ul>
  );
}
