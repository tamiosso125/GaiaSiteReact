import React from "react";
import '../Components/Title.css'

class LinkHeader extends React.Component {
  render() {
    const { title, link } = this.props;
    return (
      
      <span><a href={ link } className="title">{ title }</a></span>
    );
  }
}

export default LinkHeader;