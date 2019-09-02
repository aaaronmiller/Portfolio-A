import React from "react";
import Roll from 'react-reveal/Roll';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <ScrollAnimation animateIn="fadeInDown">
   
        <h1 style={{color:"white", fontSize:"35px"}}>{title}</h1>
       </ScrollAnimation>
        <p style={{color:"white"}}>{subtitle}</p>
      </div>
    </div>
  );
}
