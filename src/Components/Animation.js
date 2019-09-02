import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';




class Animation extends Component {


    render() {
        return (
            <div style={{ textAlign: "center"}}>
            <div style={{ textAlign: "center", position:"relative", display:"inline-block" }} id="section1">
                <img src="/geometry.gif" alt="geometric animation, credit to: xponentialdesign@xponentialdesign" style={{display:"block"}} />
                <h1 style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -80%)"
                }}> 
                <span class="text-wrapper" style={{color:"#3582b3", fontSize:"35px"}}>
                <Roll right cascade >
                           
                           Aaron Miller<br />
                         Full Stack <br />
                         Software Engineer
                            
                            </Roll> 
                            </span>
                    </h1>
                </div>
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
            </div>
            
        );
    }
}

export default Animation;