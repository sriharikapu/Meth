import React from "react";
import { Link } from "react-router-dom";

import logo from "./../logo.png";

export class NavBar extends React.Component {
  render() {
    return (
      <div className="top-bar row">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li class="top-bar__logo">
              <Link to={`/`} className="">
                <img src={logo} width="96" alt="METH"/>
              </Link>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-circle text-success" /> Network Good
              </a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to={`/catalogue`} className="">
                <i class="fas fa-book-open" /> Catalogue
              </Link>
            </li>
            <li>
              <Link to={`/catalogue`} className="">
                <i class="fas fa-search" /> Search
              </Link>
            </li>
            <li>
              <Link to={`/account`} className="">
                <i class="far fa-user-circle" /> Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
