import React from "react";
import logo from '../images/Gaia_Logo_1_1_1.png';
import "./LogoGaia.css"

class Image extends React.Component {
  render() {
    return (
      <img className="LogoGaia" src={ logo } alt="Logo do Gaia" />
    );
  }
}

export default Image;