import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import NavBar from '../Components/NavBar/NavBar';
// import Auth from '../Components/Auth/auth';

import './App.scss';

connection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <NavBar authed={authed}/>
        {/* <Auth authed={authed}/> */}
        <h2>Sports Roster</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
