import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Animation from "./Components/Animation";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Animation />

        <Section
          title="About"
          subtitle={
            <div>
              <p>
                Hi! I’m Aaron, a full stack developer from Seattle, WA. I love to write scalable, maintainable and efficient code. Keeping it clean and high quality without losing the key focus. Working with the latest techniques day in day out is my goal.
              </p>

              I like to blog about things I think are cool or working on demos at CodePen.
              <p>
                When I’m not working, I’m either: Looking for the latest coding techniques, practicing my calligraphy, skiing down the local mountains, traveling, photographing or being a food addict.  I also have a keen interest in hardware; fixing laptops and building desktops, messing around with breadboards for Arduino projects, and making drones and other RC creations.
              </p>
              <p>
              </p>
              <p>
                Shoot me in the leg!<br />
                Once again perhaps...
              <p>
                  Or maybe twice...
              </p>


              </p>
            </div>
          }
          dark={false}
          id="section2"
        />
        <Section
          title="Portfolio"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Contact"
          subtitle={
            <div>
              <form id="contact-form" >
                <ul>
                  <li style={{textAlign:"left"}}>
                  <p>
                  <label for="name" >Name: </label >
                  <span  style={{padding:"0px 0px 0px 20px"}}>
                  <input type="text" id="name" name="name" required="required" />
                  </span>
                  </p>
                                      </li>
                    <li style={{textAlign:"left"}}>
                    <p>
                    <label for="email">Email: </label>
                    <span  style={{padding:"0px 0px 0px 24px"}}>
                    <input type="email" id="email" name="email" required="required" />
                    </span>
                    </p>
                    </li>
                      <li style={{textAlign:"left"}}>
                      <p>
                      <span style={{ margin:"0px 0px 30px 0px"}}>
                      <label for="message" >Message: </label>
                      </span>
                      <span >
                      <textarea id="message" name="message" rows="5" cols="33" required="required" style={{ verticalAlign: "sub"}}>
                      </textarea>
                      </span>
                      <p>
                      <input type="submit" />
                      </p>
                      </p>
                      <div style={{color:"black"}}>
                      <p>
                      .</p>
                      <p>
                      .</p>
                      <p>
                      .</p>
                      <p>
                      .</p>
                      <p>
                      .</p>
                      </div>
                      
                      </li>
                </ul>
                                    </form>
          </div>
                  }
          dark={false}
                  id="section4"
                  />
        <Section
                    title="Boogers"
                    subtitle={dummyText}
                    dark={true}
                    id="section5"
                  />
      </div>
                );
              }
            }
            
            export default App;
