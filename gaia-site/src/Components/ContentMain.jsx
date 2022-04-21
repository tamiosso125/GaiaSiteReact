import React from "react";

class About extends React.Component {
  render() {
    const {idClass, title} = this.props;
    return (
      <div>
        <h1 id={idClass} className={idClass}>{title}</h1>
      </div>
    );
  }
}

export default About;