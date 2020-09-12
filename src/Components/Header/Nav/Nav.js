import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { NAV_DATA } from './navData';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.renderNav = this.renderNav.bind(this);
  }

  renderNav(navItem, index) {
    return (
      <li key={index}>
        <Link to={navItem.href}>
          {navItem.name}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              {NAV_DATA.map(this.renderNav)}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
