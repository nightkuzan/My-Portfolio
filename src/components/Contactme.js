import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
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
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result.text);
          console.log("Email sent successfully");
          
        },
        (error) => {
          console.log(error.text);
        }
      );
    // reset value in from after submit
    e.target.reset();
  };

  return (
    <div className="af-nav">
      <div className="container">
        <div className="contact-me">
              <div className="contact-me-left">
                <h1 className="contact-me-title">Contact Me</h1>
                <span className="contact-me-subtitle">
                  Have any questions?
                  <br/> 
                  Feel free to contact me.
              </span>
            </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  name="user_name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address*"
                  name="user_email"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                  name="subject"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message*"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
