import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o4qyqjq",
        "template_ghsnwcg",
        form.current,
        "seyQ18qWt5gj481w8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="af-nav">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contactme;
