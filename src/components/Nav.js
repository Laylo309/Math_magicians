import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const linkColors = {
      color: 'white',
    };

    return (
      <nav className={this.props.class}>
        <h1 className="logo" style={linkColors}></h1>
          <ul>
            <li>
              <Link to="/" style={linkColors}><li>Home</li></Link>
            </li>
            <li>
              <Link to="/calculator" style={linkColors}><li>Calculator</li></Link>
            </li>
            <li>
              <Link to="/quotes" style={linkColors}><li>Quotes</li></Link>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
