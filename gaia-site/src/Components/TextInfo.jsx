import React from "react";
import './Title.css'

class About extends React.Component {
  render() {
    const { title, link } = this.props;
    return (
      
      <span><a href={ link } className="title">{ title }</a></span>
    );
  }
}

export default About;