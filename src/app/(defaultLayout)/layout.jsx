import React from "react";
import HeaderStyle5 from "../Components/Header/HeaderStyle5";
import Footer5 from "../Components/Footer/Footer5";
import Header1 from "../Components/Header/Header1";

const layout = ({ children }) => {
  return (
    <div className="main-page-area3">
      <Header1></Header1>
      {children}
      <Footer5></Footer5>
    </div>
  );
};

export default layout;
