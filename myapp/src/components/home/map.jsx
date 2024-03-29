import React from "react";

function map() {
  return (
    <div>
      <section className="text-center">
        <h3 className="mb-5">Contact us</h3>

        <div className="row">
          <div className="col-lg-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
              className="h-100 w-100"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="col-lg-7">
            <form>
              <div className="row">
                <div className="col-md-9">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                        />
                        <label className="form-label" for="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="form3Example2"
                          className="form-control"
                        />
                        <label className="form-label" for="form3Example2">
                          Email Address
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                    />
                    <label className="form-label" for="form3Example3">
                      Subject
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form4Example3"
                      rows="4"
                    ></textarea>
                    <label className="form-label" for="form4Example3">
                      Message
                    </label>
                  </div>
                  <div className="text-center text-md-start">
                    <button
                      type="submit"
                      className="btn btn-primary mb-5 mb-md-0"
                    >
                      Send
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                      <p>
                        <small>New York, NY 10012, USA</small>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-phone fa-2x text-primary"></i>
                      <p>
                        <small>+ 01 234 567 89</small>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-envelope fa-2x text-primary"></i>
                      <p>
                        <small>contact@gmail.com</small>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default map;
