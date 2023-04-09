// import router from react
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/index";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Peon from "./components/dashbord/Peon";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallary from "./components/Gallary/Gallary";
import Home from "./components/home/Home";
import isLoggedIn from "./components/helper/isLoggedIn";
import Student from "./components/dashbord/Student";
import Hod from "./components/dashbord/Hod";
import Faculsty from "./components/dashbord/Faculsty";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Slider />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/index" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashbord/student"
            element={isLoggedIn() ? <Student /> : <Auth />}
          />
          <Route
            path="/dashbord/peon"
            element={isLoggedIn() ? <Peon /> : <Auth />}
          />
          <Route
            path="/dashbord/hod"
            element={isLoggedIn() ? <Hod /> : <Auth />}
          />
          <Route
            path="/dashbord/faculty"
            element={isLoggedIn() ? <Faculsty /> : <Auth />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
