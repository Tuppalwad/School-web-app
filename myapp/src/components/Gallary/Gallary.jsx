import React from "react";
import Navbar from "../auth/navbar";
import Fooder from "../Fooder/Fooder";
import Bg10 from "./assets/images/Invention_img.jpg";
import Bg2 from "./assets/images/Bg3.jpeg";

import Bg3 from "./assets/images/Bg4.jpeg";

import Bg4 from "./assets/images/bg5.jpeg";

import Bg5 from "./assets/images/bg6.jpeg";

import Bg6 from "./assets/images/bg10.jpeg";

import Bg7 from "./assets/images/bg9.jpeg";
import Bg9 from "./assets/images/bg7.jpeg";
import Bg8 from "./assets/images/bg12.jpeg";
import Vid from "./assets/videos/s_web.mp4";
import "..//style/gallary.css";
function Gallary() {
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ textAlign: "center" }}>
        <h1
          className="my-3"
          style={{ alignItem: "center", margin: "auto", textAlign: "center" }}
        >
          <b>Gallary</b>
        </h1>
        <p>All the images of schools</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg2} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg3} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg4} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg5} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg6} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg7} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg8} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg9} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <img src={Bg6} className="card-img-top" alt="..." />
              <div className="card-body g_body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how to show video on web page  */}

      <div className="container my-4" style={{ textAlign: "center" }}>
        <h1>
          <b>videos</b>
        </h1>
        <p>This are the best video</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 tcards ">
            <div className="card">
              <video
                width="400px"
                height="250"
                style={{ margin: "auto", display: "block" }}
                controls
              >
                <source src={Vid} type="video/mp4" />
              </video>
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <video
                width="400px"
                height="250"
                style={{ margin: "auto", display: "block" }}
                controls
              >
                <source src={Vid} type="video/mp4" />
              </video>
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <video
                width="400px"
                height="250"
                style={{ margin: "auto", display: "block" }}
                controls
              >
                <source src={Vid} type="video/mp4" />
              </video>
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <video
                width="400px"
                height="250"
                style={{ margin: "auto", display: "block" }}
                controls
              >
                <source src={Vid} type="video/mp4" />
              </video>
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <video
                width="400px"
                height="250"
                style={{ margin: "auto", display: "block" }}
                controls
              >
                <source src={Vid} type="video/mp4" />
              </video>
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card">
              <video
                width="400px"
                height="250"
                style={{ margin: "auto", display: "block" }}
                controls
              >
                <source src={Vid} type="video/mp4" />
              </video>
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Gallary;
