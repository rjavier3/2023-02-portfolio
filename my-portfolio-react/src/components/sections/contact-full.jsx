import React from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import services4Data from "../../data/sections/services4.json";

const ContactSection = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact-sec section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Get In Touch
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Contact Me.
            </h3>
          </Split>
          <span className="tbg">Contact</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  // alert(JSON.stringify(values, null, 2));
                  // show message
                  const formData = new FormData();

                  formData.append('name', values.name);
                  formData.append('email', values.email);
                  formData.append('message', values.message);
                  const res = await axios.post('/contact.php', formData);

                  if (!res) return;

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              validate={validateEmail}
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="simple-btn custom-font cursor-pointer"
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="services sub-bg mt-100">
      <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="item md-mb50 wow fadeInUp">
                  <span className="icon pe-7s-mail"></span>
                  <h6>Email</h6>
                  <p>russelljohn.javier@gmail.com</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="item md-mb50 wow fadeInUp">
                  <span className="icon pe-7s-phone"></span>
                  <h6>Phone</h6>
                  <p>+1.780.886.2081</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="item md-mb50 wow fadeInUp">
                  <span className="icon pe-7s-link"></span>
                  <h6>Follow me</h6>
                  <div className="tey-follow-icons">
                    <div className="social">
                      <a href="#0" className="tey-follow-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#0" className="tey-follow-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#0" className="tey-follow-icon">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        {/* <div className="row">
          {services4Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className={`item ${
                  index != services4Data.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                }
              >
                <span className={`icon ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
    </section>
    
  );
};

export default ContactSection;
