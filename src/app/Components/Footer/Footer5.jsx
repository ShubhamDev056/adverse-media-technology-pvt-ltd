import Image from "next/image";
import Link from "next/link";

const Footer5 = () => {
  return (
    <div className="footer7 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a href="">
                  <Image
                    src="/assets/img/logo/logo.png"
                    alt="img"
                    width={150}
                    height={42}
                  />
                </a>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>
                  At Adverse Media IT Solutions, we are dedicated to delivering
                  innovative technology solutions tailored to meet the unique
                  needs of businesses like yours.{" "}
                </p>
              </div>
             
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>

              <ul className="menu-list">
                <li>
                  <Link href="/service">
                    Cloud Computing Solution
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    Cybersecurity & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    It Consulting & Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                <li>
                  <Link href="/about">About Us </Link>
                </li>
                <li>
                  <Link href="/service">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              {/* <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon1.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="tel:0500222333">0500 222 333</a>
                </div>
              </div> */}


              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon3.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="mailto:admin@Adverse Media.org">
                    admin@Adverse Media.org
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="space40"></div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="coppyright">
                <p>Copyright @{new Date().getFullYear()} Adverse Media.All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer5;
