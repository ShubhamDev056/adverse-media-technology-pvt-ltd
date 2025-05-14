import Image from "next/image";
import Link from "next/link";

const Mission1 = () => {
  return (
    <div className="solution sp bg1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span">
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="img"
                  width={100}
                  height={16}
                />
                Our Mission
              </span>
              <h2>Innovating for Success: Our Technology Mission</h2>
              <div className="space16"></div>
              <p>
                At Adverse Media, our mission is simple: to revolutionize the
                digital landscape by delivering top-notch technology solutions
                that drive growth, efficiency, and sustainability for our
                clients. We strive to be the trusted partner that businesses can
                rely on to navigate the complexities of the digital world.
              </p>
              <div className="space16"></div>
              <p>
                At Adverse Media, our mission is to empower businesses through
                technology. We believe in harnessing the power of innovation to
                drive growth, efficiency, and sustainability for our clients.
                Through our tailored technology solutions and unwavering
                commitment to excellence, we strive to be the catalyst for
                positive change in the digital landscape.
              </p>

              <div className="space30"></div>
              <div className="">
                <Link className="theme-btn1" href="/contact">
                  Get A Quote{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="solution-images">
              
              <div className="image2">
                <Image
                  src="/assets/img/work/works.png"
                  alt="img"
                  width={470}
                  height={400}
                />
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission1;
