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
                <span class="text-wrapper" style={{color:"#3582b3", fontSize:"35px"}}>
                <Roll right cascade >
                           
                           Aaron Miller<br />
                         Full Stack Software Engineer
                            
                            </Roll> 
                            </span>
                    </h1>
                    <img src="https://media0.giphy.com/media/l0Ex4wdxilrX1N6Lu/giphy.gif?cid=790b7611566188b62fc9f73883a14f462a1eaf25f17fca6d&rid=giphy.gif" width="480" height="480" alt="geometric animation" />
                </div>
            </div>
        );
    }
}

export default Animation;