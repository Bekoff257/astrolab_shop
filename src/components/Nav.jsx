import "../style/Nav.css";
import logo from "../assets/apple.svg";
import { Link, animateScroll as scroll } from "react-scroll"
import { VscCallOutgoing } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx"
import { LiaTimesSolid } from "react-icons/lia"
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_content">
          <div className="nav_right">
            <div className="nav_logo">
              <div className="logo">
                <img src={logo} alt="_nav-logo" />
                <h2>Astrolab</h2>
              </div>

              <div className="menu">
                <button className="hamburderMenu" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
                </button>
              </div>
            </div>
          </div>
          <div className="nav_left-main" style={{ maxHeight: isOpen ? "500px" : "0"}}>
            <ul className="main_item">
              <li className="item">
                <Link
                  activeClass="active"
                  to="mac"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} 
                >Mac</Link>
              </li>
              <li className="item">
                <Link
                  activeClass="active"
                  to="mac"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} 
                >iPad</Link>
              </li> 
              <li className="item">
                <Link
                  activeClass="active"
                  to="phone"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} 
                >iPhone</Link>
              </li>
              <li className="item">
                <Link
                  activeClass="active"
                  to="airpods"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} 
                >AirPods</Link>
              </li>
              <li className="item">
                <Link
                  activeClass="active"
                  to="iwatch"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} 
                >Watch</Link>
              </li>
            </ul>
            <div className="nav_left">
              <p>
                <Link to={'tel:+99871 200 06 20'}><VscCallOutgoing/> +99871 200 06 20</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
