"use client";
import Slider from "react-slick";
import data from "../../Data/home5/testimonial5.json";
import { useRef } from "react";
import SectionTitle3 from "../Common/SectionTitle3";
import Image from "next/image";

const Testimonial4 = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="tes7 sp">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <div className="heading7">
              <SectionTitle3
                SubTitle="Testimonial"
                Title="Feedback from <span>Customers</span>"
                content="Whether you are looking to enhance productivity, improve efficiency, or stay ahead of technological advancements, we've got you covered."
              ></SectionTitle3>
            </div>
          </div>
        </div>
        <div className="space60"></div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div
              className="big-image"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <Image
                src="/assets/img/testimonial/testimonials.png"
                alt="img"
                width={416}
                height={379}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tes7-slider-area"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <div className="tes7-slider">
                <Slider ref={sliderRef} {...settings}>
                  {data.map((item, i) => (
                    <div key={i} className="single-slider">
                      <div className="qute quote_icon_5">
                        <Image
                          src="/assets/img/icons/qute7.png"
                          alt="img"
                          width={64}
                          height={65}
                        />
                      </div>
                      <p>{item.desc}</p>
                      <div className="bottom-area">
                        <div className="image">
                         
                        </div>
                        <div className="heading">
                          <h5>
                            <a href="#">{item.title}</a>
                          </h5>
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="arrows-button">
                <button onClick={previous} className="tes7-next-arrow">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button onClick={next} className="tes7-prev-arrow">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial4;
