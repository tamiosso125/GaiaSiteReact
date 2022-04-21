import React from "react";
import Icons from "../Data/DataIcons.js";
import './Icon.css'
class SocialIcons extends React.Component {
  render() {
    return (
      <span>{Icons.map(({link, img}, index) => (
      <a
      key={ index }
       href={link}
       target="_blank"
       rel="noopener noreferrer"
      className="icon"
      >
      <img src={img} alt="Icones Redes Socias"/>
       </a>
      ))}</span>
    );
  }
}

export default SocialIcons;