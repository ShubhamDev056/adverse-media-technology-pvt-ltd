import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import Mission1 from "@/app/Components/Mission/Mission1";
import Services5 from "@/app/Components/Services/Services5";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Our Services"></BreadCumb>
      <MarqueeText></MarqueeText>
      <Services5></Services5>
      <Mission1></Mission1>
      <Cta1></Cta1>
    </div>
  );
};

export default page;
