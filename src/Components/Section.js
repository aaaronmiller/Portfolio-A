import React from "react";
import Roll from 'react-reveal/Roll';

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      
      <Roll right cascade >
        <h1 style={{color:"white", fontSize:"35px"}}>{title}</h1>
      </Roll>
        <p style={{color:"white"}}>{subtitle}</p>
      </div>
    </div>
  );
}
