import React from "react";
import cls from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import FB from "../../assets/images/FB.png";
import X from "../../assets/images/X.png";
import IG from "../../assets/images/IG.png";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div>
        <p className={cls.footer_contacts}>Contacts</p>
        <div className={cls.footer_number}>
          8 800 555 35 35
          <br />
          <br />
          emailexample@email.com
        </div>
        <div className={cls.copiright_footer}>2025 Sneaker store. All rights reserved</div>
      </div>
      <div className={cls.footerRight}>
        <div className={cls.footer_icons}>
          <NavLink to="https://instagram.com">
            <img className={cls.img} src={FB} alt="FB" />
          </NavLink>
          <NavLink to="https://instagram.com">
            <img className={cls.img} src={X} alt="X" />
          </NavLink>
          <NavLink to="https://instagram.com">
            <img className={cls.img} src={IG} alt="IG" />
          </NavLink>
        </div>
        <input className={cls.insert} type="text" placeholder="insert your email" />
      </div>
    </footer>
  );
};

export default Footer;
