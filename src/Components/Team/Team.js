import React from 'react';
import PropTypes from 'prop-types';
import PlayerData from '../../helpers/data/playerData';
import Player from '../Player/Player';

import './Team.scss';

class Team extends React.Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
  }

  state = {
    players: [],
  }

  getPlayers = () => {
    const { uid } = this.props;
    PlayerData.getPlayersByUid(uid)
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  deletePlayer = (playerId) => {
    PlayerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { players } = this.state;
    const playerCard = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer}/>);

    return (
      <div>
      <h1>Big Orange Ballers</h1>
      <div className = "rosterContainer">
      {playerCard}
      </div>
      </div>
    );
  }
}

export default Team;
