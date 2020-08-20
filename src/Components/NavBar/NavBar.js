/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './NavBar.scss';

import Auth from '../Auth/auth';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><i class="fas fa-football-ball fa-2x"></i></a>
      <ul className = "ml-auto">
      <li>
      <Auth authed={authed}/>
      </li>
      </ul>
      </nav>
    );
  }
}

export default NavBar;
