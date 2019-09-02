import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';



class Animation extends Component {


    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }} id="section1">
                <h1 style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}> 
                <span class="text-wrapper" style={{color:"#3582b3", backgroundColor:"white", fontSize:"35px"}}>
                <Roll right cascade  style={{color:"#3582b3", backgroundColor:"white", fontSize:"35px"}}>
                           
                           Aaron Miller<br />
                         Full Stack Software Engineer
                            
                            </Roll> 
                            </span>
                    </h1>
                    <img src="/geometry.gif" width="480" height="480" alt="geometric animation, credit to: xponentialdesign@xponentialdesign" />
                </div>
            </div>
        );
    }
}

export default Animation;