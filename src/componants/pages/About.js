import React from "react";
import CardBetter from "../CardMichael";
import CardClark from "../CardClark";
import "../About.css";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <div>
      <h1 className="color-text">Development Team</h1>
      <div className="center">
        <CardBetter />
        <CardClark />
      </div>

      <iframe
        frameborder="0"
        scrolling="no"
        width="100%"
        height="1000px"
        src="https://drive.google.com/file/d/1vKHanS0jb_PmL42lJwIEn7Y4IO0BtiVX/preview"
      ></iframe>
    </div>
  );
};

export default About;
