import React from "react";
import "./Footer.css";

const style = {
  marginTop: "50px",
  backgroundColor: "rgba(179, 179, 179, 0.8)",
  fontSize: "80%",
  textAlign: "center",
  position: "relative",
  padding: "20px",
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-area">
      <div className="fixed-bottom" style={style}>
        {`${process.env.REACT_APP_RECIPE_NAME} © ${year}`}
      </div>
    </div>
  );
};

export default Footer;
