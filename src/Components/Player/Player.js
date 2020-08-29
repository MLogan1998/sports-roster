import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/props/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer, player } = this.props;
    editAPlayer(player);
  }

  deletePlayerEvent = (e) => {
    const { player, deletePlayer } = this.props;
    e.preventDefault();
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card">
  <img className="card-img-top" src={player.imgUrl} alt={player.name}></img>
  <div className="card-body">
    <h5 className="card-title">{player.name}</h5>
    <p className="card-text">{player.position}</p>
  </div>
  <div className="card-footer">
  <i className="fas fa-trash" onClick={this.deletePlayerEvent}></i>
  <i className="fas fa-edit" onClick={this.editPlayerEvent}></i>
  </div>
</div>
    );
  }
}

export default Player;
