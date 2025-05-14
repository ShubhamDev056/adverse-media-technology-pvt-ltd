import Image from "next/image";

const ContactInfo1 = () => {
  return (
    <div>
      <div className="space100"></div>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-boxs">
                <div className="heading1">
                  <h2>Contact Information</h2>
                  <div className="space16"></div>
                  <p>
                    We Have grown up with the internet revolution, and we <br />{" "}
                    know how to deliver on its
                  </p>
                </div>
                {/* <div className="contact-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icons/contact-page-icon1.png"
                      alt="img"
                      width={40}
                      height={38}
                    />
                  </div>
                  <div className="heading">
                    <h5>Contact Us</h5>
                    <a href="tel:(124)555-6565" className="text">
                      (124) 555-6565
                    </a>
                  </div>
                </div> */}

                <div className="contact-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icons/contact-page-icon2.png"
                      alt="img"
                      width={34}
                      height={32}
                    />
                  </div>
                  <div className="heading">
                    <h5>Send Us a Mail</h5>
                    <a href="mailto:adversemedia.hr@gmail.com" className="text">
                      adversemedia.hr@gmail.com{" "}
                    </a>
                  </div>
                </div>

                {/* <div className="contact-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icons/contact-page-icon3.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="heading">
                    <h5>Office Location</h5>
                    <a href="tel:(124)555-6565" className="text">
                      73 Bridge St Brooklyn Arakansas <br /> 85032 United
                      States, NY 10018
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-details">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="number" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="single-input">
                        <textarea
                          cols="30"
                          rows="5"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button className="theme-btn1">
                        Submit{" "}
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space100"></div>

      <div className="contact-map-page">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.51076219122!2d77.31942469170666!3d28.522327773702926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1747206877758!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo1;
