import "./Footer.css";

import Logo from "../../../public/Image/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Box">
      <div className="continer continerFooter">
        <div className="BoxFooter">
          <div className="LogoAndIcon">
            <img src={Logo}></img>
            <ul>
              <a href="https://www.facebook.com/Obada Dl" target="_blank">
                <li>
                  <FaFacebookSquare />
                </li>
              </a>
              <a href="https://www.instagram.com/obadadl" target="_blank">
                <li>
                  <FaInstagramSquare />
                </li>
              </a>
              <a href="https://wa.me/963947584270" target="_blank">
                <li>
                  <FaWhatsappSquare />
                </li>
              </a>
            </ul>
          </div>
          <div className="FooterTags">
            <ul>
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
