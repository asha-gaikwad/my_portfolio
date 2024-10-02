import React, { useRef } from "react";
import emailjs from "emailjs-com";
import contactCss from "../Contact/Contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_84rjk1k", // Replace with your EmailJS service ID
        "template_aqmcja7", // Replace with your EmailJS template ID
        form.current,
        "xjgBUzfkikO5OOYRU" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <section className={`${contactCss.ContactWrapper} section`} id="contact">
      <h2>Contact Us</h2>
      <p className={contactCss.pera}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        explicabo saepe facilis consequuntur adipisci consectetur aliquid.
      </p>
      <div className={contactCss.ContactContainer}>
        <div className={contactCss.ContactInfo}>
          <div className={contactCss.card}>
            <i className="ri-linkedin-line">
              <h3>Linkedin</h3>
            </i>
          </div>
          <div className={contactCss.card}>
            <i className="ri-mail-line">
              <h3>gaikwadasha2001@gmail.com</h3>
            </i>
          </div>
          <div className={contactCss.card}>
            <i className="ri-map-pin-line">
              <h3>Pune Maharashtra</h3>
            </i>
          </div>
        </div>
        <div className={contactCss.ContactForm}>
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className={contactCss.inputWrapper}>
              <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
            </div>
            <div className={contactCss.inputWrapper}>
              <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
            </div>
            <div className={contactCss.inputWrapper}>
              <textarea name="message" id="message" className="form-control" placeholder="Message" required></textarea>
            </div>
            <button type="submit">
              Submit
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
