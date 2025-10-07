import React from "react";
import sp_chat from "../../assets/images/Sp_Chat.svg";
import FB from "../../assets/images/FB_color.svg";
import X from "../../assets/images/x_icon.jpeg.svg";
import cls from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={cls.contacts_section}>
      <div className={cls.contacts}>
        <h1 className={cls.contacts_title}>Contacts</h1>
        <ul>
          <li className={cls.li}> 8 800 000 00 00</li>
          <li className={cls.li}> emailexample@email.com</li>
        </ul>
        <form action="#">
          <div className={cls.input_form}>
            <input className={cls.Email} type="text" placeholder="Email" />
            <input className={cls.Name} type="text" placeholder="Name" />
          </div>
          <div>
            <input className={cls.Msg} type="text" placeholder="Message" />
            <button className={cls.contacts_btn} type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className={cls.container_find_us}>
        <h3>Find us on:</h3>
        <div className={cls.links}>
          <a href="#">
            <img className="contacts_icon" src={sp_chat} alt="sp_chat" />
          </a>
          <a href="#">
            <img className="contacts_icon" src={FB} alt="FB" />
          </a>
          <a href="#">
            <img className="contacts_icon" src={X} alt="X" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contacts;
