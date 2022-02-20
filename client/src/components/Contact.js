import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="container">
    <div className="ch1">
      
      <div className="ch1item-1"></div>
      <div className="ch1item-2"><h2>Contact Us</h2></div>
      <div className="ch1item-3"></div>
      
      </div>

      <div className="cm">
        <form>

          <div className="conatiner1">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Name"
            />
          </div>

          <div className="container2">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email"
            />
          </div>

          <div className="container3">
            <label for="exampleInputPassword1">Phone</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your Phone"
            />
          </div>

          <div className="container4">
            <label for="exampleInputPassword1">Message</label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="conatiner5">
            <button id="sumbit" className="submit1" type="submit" className="btn btn-primary  m-4">
              Send Message
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;