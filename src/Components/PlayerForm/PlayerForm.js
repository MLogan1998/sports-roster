import React from 'react';

import authData from '../../helpers/data/authData';
import './PlayerForm.scss';

class PlayerForm extends React.Component {
  state = {
    isEditing: false,
    name: '',
    imgUrl: '',
    position: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeImgEvent = (e) => {
    e.preventDefault();
    this.setState({ imgUrl: e.target.value });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { name, position, imgUrl } = this.state;
    const { createPlayer } = this.props;
    const newPlayer = {
      name,
      position,
      imgUrl,
      uid: authData.getUid(),
    };
    createPlayer(newPlayer);
    this.props.closeForm();
  }

  closeFormEvent = (e) => {
    e.preventDefault();
    this.props.closeForm();
  };

  render() {
    const { isEditing } = this.state;
    return (
      <form>
     <button className="btn btn-danger" onClick={this.closeFormEvent}>Close Form</button>
     <div className="form-group">
       <label for="playerName">Player Name</label>
       <input type="text" className="form-control" id="playerName" aria-describedby="emailHelp" placeholder="Enter Player Name" onChange={this.changeNameEvent}/>
     </div>
     <div className="form-group">
       <label for="imgUrl">Image URL</label>
       <input type="text" className="form-control" id="imgUrl" aria-describedby="emailHelp" placeholder="Enter Image URL" onChange={this.changeImgEvent}/>
     </div>
     <div className="form-group">
       <label for="position">Position</label>
       <input type="text" className="form-control" id="position" aria-describedby="emailHelp" placeholder="Position" onChange={this.changePositionEvent}/>
     </div>
     {
          isEditing
            ? <button className="btn btn-light" onClick={this.editBoardEvent}>Edit Board</button>
            : <button className="btn btn-dark" onClick={this.savePlayerEvent}>Save Player</button>
     }
     </form>
    );
  }
}

export default PlayerForm;
