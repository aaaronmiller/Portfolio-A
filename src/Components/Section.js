import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 style={{color:"white", fontSize:"35px"}}>{title}</h1>
        <p style={{color:"white"}}>{subtitle}</p>
      </div>
    </div>
  );
}
