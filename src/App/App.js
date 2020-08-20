import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../helpers/data/authData';
import connection from '../helpers/data/connection';

import NavBar from '../Components/NavBar/NavBar';
import Team from '../Components/Team/Team';

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

    const loadComponent = () => {
      if (authed) {
        const uid = authData.getUid();
        return <Team uid={uid}/>;
      }
      return '';
    };

    return (
      <div className="App">
        <NavBar authed={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
