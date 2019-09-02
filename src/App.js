import React, { Component } from "react";
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
              <div style={{ color: "black" }}>
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
                <p>
                  .</p>

              </div>
              <p>
              </p>
            </div>
          }
          dark={false}
          id="section2"
        />
        <Section
          title="Portfolio"
          subtitle={
            <div class="row">
              <div class="col-lg-12" style={{ textAlign: "center" }}>


                <div class="work">
                  <a href="https://aaaronmiller.github.io/Board-Games-With-Friends/"><img src="/images/bgwf.jpg"
                    alt="project 3" style={{width: "200px"}} /></a>
                    <h3 style={{padding:"0px"}} >Project 3: Board games with Friends (React)</h3>
                    <h5 style={{padding:"0px"}}><a href="https://github.com/aaaronmiller/Board-Games-With-Friends">
                      (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://fast-brook-91386.herokuapp.com/"><img src="/images/spect.jpg"
                        alt="project 2" style={{ width: "200px" }} /></a>
                      <h3>Project 2: Spectrum Careers</h3>
                      <h5><a href="https://github.com/aaaronmiller/Project-2-Spectrum-Careers">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://redchampion.github.io/projectnumber1/"><img src="/images/project1thumb.jpg"
                        alt="project 1" style={{ width: "200px" }} /></a>
                      <h3>Project 1 : My Dog and Me</h3>
                      <h5><a href="https://github.com/aaaronmiller/burger">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://damp-caverns-93347.herokuapp.com/"><img src="/images/burger.jpg"
                        alt="burger" style={{ width: "200px" }} /></a>
                      <h3>Eat-Da-Burger</h3>
                      <h5><a href="https://github.com/aaaronmiller/burger">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://bongobong.herokuapp.com/"><img src="/images/friendfinder.jpg"
                        alt="friend finder" style={{ width: "200px" }} /></a>
                      <h3>Friend Finder</h3>
                      <h5><a href="https://github.com/aaaronmiller/friendfinder">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://aaaronmiller.github.io/Word-Guess-Game/"><img src="/images/wordguess.jpg"
                        alt="Wordguess game" style={{ width: "200px" }} /></a>
                      <h3>Wordguess game</h3>
                      <h5><a href="https://github.com/aaaronmiller/Word-Guess-Game">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://aaaronmiller.github.io/traintime/"><img src="/images/train.jpg"
                        alt="Train schedule demo" style={{ width: "200px" }} /></a>
                      <h3>Train schedule demo</h3>
                      <h5><a href="https://github.com/aaaronmiller/traintime">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://aaaronmiller.github.io/unit-4-game/"><img src="/images/dogfight.jpg"
                        alt="RPG game demo" style={{ width: "200px" }} /></a>
                      <h3>RPG game demo</h3>
                      <h5><a href="https://github.com/aaaronmiller/unit-4-game">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://aaaronmiller.github.io/TriviaGame/"><img src="/images/trivia.jpg" alt="Trivia Game"
                        style={{ width: "200px" }} /></a>
                      <h3>Trivia Game</h3>
                      <h5><a href="https://github.com/aaaronmiller/TriviaGame">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://aaaronmiller.github.io/giphyhomework/"><img src="/images/giphy.jpg"
                        alt="Giphy API Demonstration" style={{ width: "200px" }} /></a>
                      <h3>Giphy API Demonstration</h3>
                      <h5><a href="https://github.com/aaaronmiller/giphyhomework">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://github.com/aaaronmiller/liri-node-app"><img src="/images/liribot.jpg"
                        alt="Giphy API Demonstration" style={{ width: "200px" }} /></a>
                      <h3>LIRI node.js application</h3>
                      <h4><a href="https://youtu.be/OQJUa90TNFE">(Video demonstration)</a></h4>
                      <h5><a href="https://github.com/aaaronmiller/liri-node-app">
                        (Git repository)</a></h5>
                    </div><br />

                    <div class="work">
                      <a href="https://github.com/aaaronmiller/bamazon"><img src="/images/bamazon.jpg"
                        alt="Bamazon node.js app" style={{ width: "200px" }} /></a>
                      <h3>Bamazon node.js application</h3>
                      <h4><a href="https://youtu.be/558zRka-hXE">(Video demonstration)</a></h4>
                      <h5><a href="https://github.com/aaaronmiller/bamazon">
                        (Git repository)</a></h5>
                    </div><br />
              </div>
                </div>
                }
          dark={true}
                id="section3"
              />
        <Section
                  title="Contact"
                  subtitle={
                    <div>
                      <form id="contact-form" >
                        <ul>
                          <li style={{ textAlign: "left" }}>
                            <p>
                              <label for="name" >Name: </label >
                              <span style={{ padding: "0px 0px 0px 20px" }}>
                                <input type="text" id="name" name="name" required="required" />
                              </span>
                            </p>
                          </li>
                          <li style={{ textAlign: "left" }}>
                            <p>
                              <label for="email">Email: </label>
                              <span style={{ padding: "0px 0px 0px 24px" }}>
                                <input type="email" id="email" name="email" required="required" />
                              </span>
                            </p>
                          </li>
                          <li style={{ textAlign: "left" }}>
                            <p>
                              <span style={{ margin: "0px 0px 30px 0px" }}>
                                <label for="message" >Message: </label>
                              </span>
                              <span >
                                <textarea id="message" name="message" rows="5" cols="33" required="required" style={{ verticalAlign: "sub" }}>
                                </textarea>
                              </span>
                              <p>
                                <input type="submit" />
                              </p>
                            </p>
                            <div style={{ color: "black" }}>
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
