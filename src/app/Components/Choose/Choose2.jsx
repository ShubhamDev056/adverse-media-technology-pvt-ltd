import Image from "next/image";
import Link from "next/link";

const Choose2 = () => {
  return (
    <div className="solution pt100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading2">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                <Image
                  src="/assets/img/icons/span2.png"
                  alt="img"
                  width={18}
                  height={16}
                />
                Best It Solution
              </span>
              <h2 className="title tg-element-title">
                Lets Elevate Your Business With Strategic IT Solutions
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-right" data-aos-duration="700">
                At Adverse Media, we understand that every business is unique,
                which is why we offer a range of flexible IT solutions designed
                to address your specific challenges and goals.
              </p>

              <div
                className="item-box"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="icon">
                  <div className="">
                    <Image
                      src="/assets/img/icons/solution-iocn1.png"
                      alt="img"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
                <div className="">
                  <h3>
                    <a href="#">Network Infrastructure Solutions</a>
                  </h3>
                  <div className="space10"></div>
                  <p>
                    Build a reliable and secure network infrastructure that{" "}
                    <br /> supports your business operations enables seamless
                  </p>
                </div>
              </div>

              <div
                className="item-box"
                data-aos="fade-right"
                data-aos-duration="1100"
              >
                <div className="icon">
                  <div className="">
                    <Image
                      src="/assets/img/icons/solution-iocn2.png"
                      alt="img"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
                <div className="">
                  <h3>
                    <a href="#">Managed It Services</a>
                  </h3>
                  <div className="space10"></div>
                  <p>
                    Focus on your core business activities while we take <br />{" "}
                    care of your IT needs with our managed IT services.
                  </p>
                </div>
              </div>

              <div className="space30"></div>
              <div className="" data-aos="fade-right" data-aos-duration="800">
                <Link className="theme-btn2" href="/service">
                  Discover More{" "}
                  <span className="arrow1">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                  <span className="arrow2">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="solution-images">
              <div
                className="image1"
                data-aos="fade-down-right"
                data-aos-duration="700"
              >
                <Image
                  src="/assets/img/others/solution-img1.png"
                  alt="img"
                  width={178}
                  height={134}
                />
              </div>
              <div className="image2">
                <Image
                  src="/assets/img/others/solution-img2.png"
                  alt="img"
                  width={470}
                  height={400}
                />
              </div>
              <div
                className="image3"
                data-aos="fade-down-left"
                data-aos-duration="700"
              >
                <Image
                  src="/assets/img/others/solution-img3.png"
                  alt="img"
                  width={178}
                  height={134}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose2;
