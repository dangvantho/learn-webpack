import React from 'react'
import { Link } from 'react-router-dom'
export default class AppBar extends React.Component  {
  render() {
    return (
      <div>
            <Link to="/">Home </Link>
            <Link to="/services">Services </Link>
            <Link to="/about">Linkbout </Link>
            <Link to="/contact">ContLinkct </Link>
            <Link to="/FaQ">FLinkQ </Link>
      </div>
    );
  }
}
