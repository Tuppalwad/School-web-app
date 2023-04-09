import React from "react";
import Slider from "./Slider";
import Navbar from "../auth/navbar";
import Important_notification from "./Important_notification";
import Bg1 from "./assets/images/I1.jpeg";
import Bg2 from "./assets/images/I2.jpeg";
import Bg3 from "./assets/images/I3.jpeg";
import Bg4 from "./assets/images/I4.jpeg";
import Bg5 from "./assets/images/Bg13.jpeg";
import Bg6 from "./assets/images/I6.jpeg";
import Map from "./map";
import Fooder from "../Fooder/Fooder";
import Featcher from "./Featcher";
import "..//style/home.css";
function Home() {
  return (
    <>
      <Navbar />

      <div>
        <Slider />
      </div>
      <div>
        <Important_notification />
      </div>
      <div
        className="container-fluid my-3 "
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <iframe
          className="map_data"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105378.78486586806!2d77.45181180678456!3d18.978049091244806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce231a38d58413%3A0x20b2dd6acec37982!2sBarbada%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1670466336835!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
        ></iframe>
      </div>

      <div className="container mx-auto "></div>
      <h1 className="text-center my-5 mb-4">
        <b>Initiatives</b>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 I_card">
            <div className="card ">
              <img src={Bg1} alt="Avatar" className="Initiatinve_img" />
              <div className="container"></div>
            </div>
          </div>
          <div className="col-md-4 I_card">
            <div className="card ">
              <img src={Bg2} alt="Avatar" className="Initiatinve_img" />
              <div className="container"></div>
            </div>
          </div>
          <div className="col-md-4 I_card">
            <div className="card ">
              <img src={Bg3} alt="Avatar" className="Initiatinve_img" />
              <div className="container"></div>
            </div>
          </div>
          <div className="col-md-4 I_card">
            <div className="card ">
              <img src={Bg4} alt="Avatar" className="Initiatinve_img" />
              <div className="container"></div>
            </div>
          </div>
          <div className="col-md-4 I_card">
            <div className="card ">
              <img src={Bg5} alt="Avatar" className="Initiatinve_img" />
              <div className="container"></div>
            </div>
          </div>
          <div className="col-md-4 I_card">
            <div className="card ">
              <img src={Bg6} alt="Avatar" className="Initiatinve_img" />
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
      <Featcher />
      <Fooder />
    </>
  );
}

export default Home;
