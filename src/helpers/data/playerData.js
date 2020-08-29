import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/player.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseResponse(data)))
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/player/${playerId}.json`);

const createPlayer = (newPlayer) => axios.post(`${baseUrl}/player.json`, newPlayer);

const editPlayer = (playerId, editedPlayer) => axios.put(`${baseUrl}/player/${playerId}.json`, editedPlayer);

export default {
  getPlayersByUid,
  deletePlayer,
  createPlayer,
  editPlayer,
};
