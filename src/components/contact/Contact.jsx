import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9v29jri",
        "template_04xns3v",
        formRef.current,
        "user_RXWugYBOuhEIJZD9LIaSj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-border"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-left-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img className="contact-icon" src={Phone} alt="" />
              +84 964903991
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              contact@david.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              26 Road 9, Binh Hung, Binh Chanh, Ho Chi Minh City
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What's your sotry?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
            {done && "Thank you very much..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
