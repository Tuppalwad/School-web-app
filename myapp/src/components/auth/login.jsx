import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import login from "./helper/loginhelp";
import Navbar from "./navbar";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const artical = { email, password };
    login(artical).then((data) => {
      if (data.code === "Success") {
        swal(data.code, data.message, data.code.toLowerCase()).then(() => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("data", JSON.stringify(data));

          window.location.href = "/dashbord/" + data.type;
        });
      } else {
        swal(data.code, data.message, data.code.toLowerCase());
      }
    });
  };
  const passShow = () => {
    const pass = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
      // change the icon
      document.querySelector(".eye").classList.remove("fa-eye");
      document.querySelector(".eye").classList.add("fa-eye-slash");
    } else {
      pass.type = "password";
      document.querySelector(".eye").classList.remove("fa-eye-slash");
      document.querySelector(".eye").classList.add("fa-eye");
    }
  };
  return (
    <>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center">Login here</h3>
            <form className="m-4" onSubmit={handleSubmit}>
              <div class="form-group mb-3">
                <label for="">Email address</label>
                <input
                  required
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Password</label> <br />
                <div className="input-group">
                  <input
                    required
                    placeholder="Password"
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <span className="input-group-text">
                    <i className="fa-solid fa-eye eye" onClick={passShow}></i>
                  </span>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" class="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
