/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Nav extends React.Component {
  render() {
    const linkColors = {
      color: 'white',
    };
    return (
      <nav>
        <h1 className="nav-title" style={linkColors}>Math Magicians!</h1>
      <ul>
        <li>
          <Link to="/" style={linkColors} className="link">Home</Link>
        </li>
        <li>
          <Link to="/calculator" style={linkColors} className="link">Calculator</Link>
        </li>
        <li>
          <Link to="/quote" style={linkColors} className="link">Quote</Link>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Nav;
