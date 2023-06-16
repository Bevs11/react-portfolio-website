import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__container gradient__footer">
      <div className="footer__text">
        Bev Designs
        <br /> Icons from{" "}
        <a
          href="https://mui.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#7483ed" }}
        >
          Material UI
        </a>
      </div>
    </div>
  );
}

export default Footer;
