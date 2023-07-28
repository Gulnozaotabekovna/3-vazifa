import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
     
              <li><a href="#">{this.props.li}</a></li>
            
    );
  }
}

export default Header;
