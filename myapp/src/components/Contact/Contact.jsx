import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../auth/navbar";
import "..//style/contact.css";
import Fooder from "../Fooder/Fooder";
function Contact() {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  let name, value;
  const changedata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, message, subject } = user;
    if (name && email && phone && message && subject) {
      const res = await fetch(
        "https://school-project-b4773-default-rtdb.firebaseio.com/mydata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            subject,
          }),
        }
      );
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Message not sent");
        console.log("Message not sent");
      } else {
        window.alert("Message sent");
        console.log("Message sent");
        setUser({ name: "", email: "", phone: "", message: "", subject: "" });
      }
    } else {
      window.alert("Please fill the form");
    }
  };

  return (
    <>
      <Navbar />
      <div id="ContentPlaceHolder1_cubkimg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 id="contact">Contact</h1>
              </div>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" style={{ color: "#fff" }}>
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  style={{ color: "#fff" }}
                >
                  Contact
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-9">
            <div class="heading_s1 text-center">
              <h2>
                <span id="ContentPlaceHolder1_lblcontacthdng">CONTACT US</span>
              </h2>
            </div>
            <p class="text-center">
              <span id="ContentPlaceHolder1_lblcontactpara">
                We Always Ready for Solve Your Queries About Our School. Fill
                this Form and Submit, After that We Contact You ASAP
              </span>
            </p>
          </div>
        </div>
        <form action="/" method="POST" style={{ marginTop: "30px" }}>
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="field_form">
                <div name="enq">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label>
                        Name<span class="required">*</span>
                      </label>
                      <input
                        onChange={changedata}
                        value={user.name}
                        name="name"
                        type="text"
                        id="ContentPlaceHolder1_txtname"
                        class="form-control"
                        placeholder="Enter Name"
                        autoComplete="off"
                      />
                      <span
                        id="ContentPlaceHolder1_RequiredFieldValidator6"
                        style={{ color: "Red", visibility: "hidden" }}
                      >
                        Required!
                      </span>
                    </div>
                    <div class="form-group col-md-6">
                      <label>
                        Email<span class="required">*</span>
                      </label>
                      <input
                        onChange={changedata}
                        value={user.email}
                        name="email"
                        type="text"
                        id="ContentPlaceHolder1_txtemail"
                        class="form-control"
                        placeholder="Enter Email"
                      />
                      <span
                        id="ContentPlaceHolder1_RegularExpressionValidator5"
                        style={{ color: "Red", display: "none" }}
                      >
                        Email is not valid !
                      </span>
                      <span
                        id="ContentPlaceHolder1_RequiredFieldValidator3"
                        style={{ color: "Red", visibility: "hidden" }}
                      >
                        Required!
                      </span>
                    </div>
                    <div class="form-group col-md-6">
                      <label>
                        Phone<span class="required">*</span>
                      </label>
                      <input
                        onChange={changedata}
                        value={user.phone}
                        name="phone"
                        type="text"
                        id="ContentPlaceHolder1_txtmobno"
                        class="form-control"
                        placeholder="Enter Mobile Number"
                      />
                      <span
                        id="ContentPlaceHolder1_RequiredFieldValidator1"
                        style={{ color: "Red", visibility: "hidden" }}
                      >
                        Required!
                      </span>
                    </div>
                    <div class="form-group col-md-6">
                      <label>
                        Subject<span class="required">*</span>
                      </label>
                      <input
                        onChange={changedata}
                        value={user.subject}
                        name="subject"
                        type="text"
                        id="ContentPlaceHolder1_txtsub"
                        class="form-control"
                        placeholder="Enter Subject"
                      />
                      <span
                        id="ContentPlaceHolder1_RequiredFieldValidator2"
                        style={{ color: "Red", visibility: "hidden" }}
                      >
                        Required!
                      </span>
                    </div>
                    <div class="form-group col-md-12">
                      <label>
                        Message<span class="required">*</span>
                      </label>
                      <textarea
                        onChange={changedata}
                        value={user.message}
                        name="message"
                        rows="2"
                        cols="20"
                        id="ContentPlaceHolder1_txtmsg"
                        class="form-control"
                        placeholder="Enter Your Message"
                      ></textarea>
                      <span
                        id="ContentPlaceHolder1_RequiredFieldValidator4"
                        style={{ color: "Red", visibility: "hidden" }}
                      >
                        Required!
                      </span>
                    </div>
                    {/* button in the form */}
                    <div class="col-md-12 btn-div">
                      <button
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$btnsubmit"
                        value="Submit"
                        id="ContentPlaceHolder1_btnsubmit"
                        class="btn btn-fill-out btn-block submit-btn btn-warning"
                        onClick={postdata}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Fooder />
    </>
  );
}

export default Contact;
