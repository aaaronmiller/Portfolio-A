import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from 'styled-components';
import { flipOutX } from 'react-animations';


const flipAnimation = keyframes`${flipOutX}`;

const FlipDiv = styled.div`animation: 2s ${flipAnimation};`;

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      flip1: false,
      flip2: false,
      flip3: false,
      flip4: false,
      flip5: false
    }
  }

  


    scrollToTop = () => {
      scroll.scrollToTop();
    };
    
   
  render() {
    const flip1 = this.state.flip1
    const flip2 = this.state.flip2
    const flip3 = this.state.flip3
    const flip4 = this.state.flip4
    const flip5 = this.state.flip5
      
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
                  onClick={() => this.setState({ flip1: true })}
                  onAnimationEnd={() => this.setState({ flip1: false })}
                  className={flip1 ? 'flip1' : ''}
                  >
                  {this.state.flip1 ? 
                    (
                      <FlipDiv style={{backgroundColor:"black", color:"red"}}>
                    Home 
                    </FlipDiv>
                  ) : (
                    <div>
                    Home
                    </div>
                  )}
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
                onClick={() => this.setState({ flip2: true })}
                onAnimationEnd={() => this.setState({ flip2: false })}
                className={flip2 ? 'flip2' : ''}
                >
                {this.state.flip2 ? 
                  (
                    <FlipDiv style={{backgroundColor:"black", color:"red"}}>
                  About 
                  </FlipDiv>
                ) : (
                  <div>
                  About
                  </div>
                )}
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
                onClick={() => this.setState({ flip3: true })}
                  onAnimationEnd={() => this.setState({ flip3: false })}
                  className={flip3 ? 'flip3' : ''}
                  >
                  {this.state.flip3 ? 
                    (
                      <FlipDiv style={{backgroundColor:"black", color:"red"}}>
                    Portfolio  
                    </FlipDiv>
                  ) : (
                    <div>
                    Portfolio
                    </div>
                  )}
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
                onClick={() => this.setState({ flip4: true })}
                onAnimationEnd={() => this.setState({ flip4: false })}
                className={flip4 ? 'flip4' : ''}
                >
                {this.state.flip4 ? 
                  (
                    <FlipDiv style={{backgroundColor:"black", color:"red"}}>
                  Contact 
                  </FlipDiv>
                ) : (
                  <div>
                  Contact
                  </div>
                )}
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
                onClick={() => this.setState({ flip5: true })}
                onAnimationEnd={() => this.setState({ flip5: false })}
                className={flip5 ? 'flip5' : ''}
                >
                {this.state.flip5 ? 
                  (
                    <FlipDiv style={{backgroundColor:"black", color:"red"}}>
                  Boogers 
                  </FlipDiv>
                ) : (
                  <div>
                  Boogers
                  </div>
                )}
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </nav>
    );
  }
}
