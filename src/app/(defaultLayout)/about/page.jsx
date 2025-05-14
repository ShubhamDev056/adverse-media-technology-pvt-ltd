import About6 from "@/app/Components/About/About6";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import Mission1 from "@/app/Components/Mission/Mission1";
import Team2 from "@/app/Components/Team/Team2";
import Testimonial4 from "@/app/Components/Testimonial/Testimonial4";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="About Us"></BreadCumb>
      <MarqueeText></MarqueeText>
      <About6
        image1="/assets/img/about/aboutus.png"
        experienceNum="25"
        experienceTitle="Years Of <br> Experience"
        subTitle="Our Service"
        title="Empower Your Business With Our Comprehensive IT Solutions"
        content="Welcome to Adverse Media, your premier destination for cutting-edge technology solutions and IT services. At Adverse Media, we are passionate about harnessing the power of technology to empower businesses a like."
        counName1="IT Consulting"
        CounNum1="100%"
        counName2="Cyber Security"
        CounNum2="98%"
      ></About6>
      <Mission1></Mission1>
      <Testimonial4></Testimonial4>
      <Cta1></Cta1>
    </div>
  );
};

export default page;
