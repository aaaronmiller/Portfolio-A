import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from 'styled-components';
import { flipOutX } from 'react-animations';


const flipAnimation = keyframes`${flipOutX}`;

const flipDiv = styled.div`
  animation: 1s ${flipAnimation};
`;

export default class Navbar extends Component {
   
    scrollToTop = () => {
      scroll.scrollToTop();
    };
    
    render() {
      
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
        
          <ul className="nav-items">
           
              <li className="nav-item one">
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}s
                  offset={-70}
                  duration={500}
                  >
                Home 
                </Link>
              </li>
           
            <li className="nav-item two">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item three">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item four">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item five">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Boogers
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </nav>
    );
  }
}
