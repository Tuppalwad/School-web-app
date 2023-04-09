import React from "react";
import Bg1 from "./Bg2.jpeg";
import "../style/about.css";
import Fooder from "../Fooder/Fooder";
import Navbar from "../auth/navbar";
function About() {
  return (
    <>
      <Navbar />
      <section className="img_about">
        <div id="images">
          <h1 className="about_heading">About Us</h1>
          <p className="about_para">
            Welcome to Welcome to JPPK School Barbda, a place where students can
            grow and learn in a supportive and inclusive environment.
          </p>
        </div>
      </section>
      <div className="container-fluid">
        {/* <img src={Bg1} id="demo" style={{ marginTop: "10px"  }} /> */}
        <div className="row">
          <div className="col-md-12">
            <div className="about">
              <h1 id="heading">About Us</h1>
              <p className="container">
                Welcome to Welcome to JPPK School Barbda, a place where students
                can grow and learn in a supportive and inclusive environment.
                Our school is located in Nanded Maharashtra and serves students
                in grades 90 to 99. At JPPK School Barbda, we believe that every
                student has the potential to succeed. That's why we offer a
                range of academic and extracurricular programs designed to meet
                the needs of all our students. Our dedicated faculty and staff
                work hard to create a positive and engaging learning experience
                for every student. In addition to our academic programs, we also
                offer a variety of extracurricular activities, including sports
                teams, clubs, and volunteer opportunities. These programs help
                students develop leadership skills, build friendships, and give
                back to their community. We are proud of our diverse student
                body and the unique talents and perspectives that each student
                brings to our school. We are committed to creating a welcoming
                and inclusive environment where all students feel valued and
                supported. Thank you for considering JPPK School Barbda for your
                child's education. We look forward to welcoming you to our
                community. Sincerely, Patil Prashant Principal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section background_bg counter_wrap bg_blue fixed_bg">
        <div className="container-fluid info">
          <div
            className="row data-fluid"
            style={{ height: "300px", marginTop: "30px" }}
          >
            <div
              className="col-lg-3 col-md-3 col-6 animation animated fadeInUp"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              style={{ animationDelay: "0.2s", opacity: "1" }}
            >
              <div className="box_counter counter_white text-center">
                <i className="fa fa-book"></i>
                <h3 className="counter_text">
                  <span id="ContentPlaceHolder1_Repeater2_lblc1nmbr_0">
                    100+
                  </span>
                </h3>
                <p>
                  <span id="ContentPlaceHolder1_Repeater2_lblc1nm_0">
                    FIRE SAFTY{" "}
                  </span>
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-6 animation animated fadeInUp"
              data-animation="fadeInUp"
              data-animation-delay="0.3s"
              style={{ animationDelay: "0.3s", opacity: "1" }}
            >
              <div className="box_counter counter_white text-center">
                <i className="fa fa-graduation-cap"></i>
                <h3 className="counter_text">
                  <span id="ContentPlaceHolder1_Repeater2_lblc2nmbr_0">
                    1500+
                  </span>
                </h3>
                <p>
                  <span id="ContentPlaceHolder1_Repeater2_lblc2nm_0">
                    Students
                  </span>
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-6 animation animated fadeInUp"
              data-animation="fadeInUp"
              data-animation-delay="0.4s"
              style={{ animationDelay: "0.4s", opacity: "1" }}
            >
              <div className="box_counter counter_white text-center">
                <i className="fa fa-users"></i>
                <h3 className="counter_text">
                  <span id="ContentPlaceHolder1_Repeater2_lblc3nmbr_0">
                    400+
                  </span>
                </h3>
                <p>
                  <span id="ContentPlaceHolder1_Repeater2_lblc3nm_0">
                    Teachers
                  </span>
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-6 animation animated fadeInUp"
              data-animation="fadeInUp"
              data-animation-delay="0.5s"
              style={{ animationDelay: "0.5s", opacity: "1" }}
            >
              <div className="box_counter counter_white text-center">
                <i className="fa fa-trophy"></i>
                <h3 className="counter_text">
                  <span id="ContentPlaceHolder1_Repeater2_lblc4nmbr_0">
                    100+
                  </span>
                </h3>
                <p>
                  <span id="ContentPlaceHolder1_Repeater2_lblc4nm_0">
                    Award Winning
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section for event and teaacher info  */}
      <div class="row justify-content-center " style={{ marginTop: "30px" }}>
        <div
          class="col-lg-6 col-md-8 animation animated fadeInUp"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
        >
          <div class="heading_s1 text-center">
            <h2>Teachars</h2>
          </div>
          <p class="text-center leads">Teachers Staff</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 tcards ">
            <div className="card new_card">
              <img src={Bg1} className="card-img-top img_teacher" alt="..." />
              <div className="card-body c_body">
                <h5 className="card-title">
                  Head of the School <br />
                  <span className="card-title-span " style={{ color: "black" }}>
                    Patil Prashant
                  </span>
                </h5>
                <p className="card-text">
                  He is the head of the school and he is very good teacher.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 tcards">
            <div className="card new_card">
              <img src={Bg1} className="card-img-top img_teacher" alt="..." />
              <div className="card-body c_body">
                <h5 className="card-title">
                  Head of the School <br />
                  <span className="card-title-span " style={{ color: "black" }}>
                    Patil Prashant
                  </span>
                </h5>
                <p className="card-text">
                  He is the head of the school and he is very good teacher.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 tcards">
            <div className="card new_card">
              <img src={Bg1} className="card-img-top img_teacher" alt="..." />
              <div className="card-body c_body">
                <h5 className="card-title">
                  Head of the School <br />
                  <span className="card-title-span " style={{ color: "black" }}>
                    Patil Prashant
                  </span>
                </h5>
                <p className="card-text">
                  He is the head of the school and he is very good teacher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fooder />
    </>
  );
}

export default About;
