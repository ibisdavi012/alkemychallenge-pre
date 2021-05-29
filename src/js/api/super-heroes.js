import axios from 'axios';

const TOKEN = "228993378987846";
const BASE_URL = `https://superheroapi.com/api/${TOKEN}/`;
//https://superheroapi.com/api/228993378987846/16

async function get(endpoint) {
  const REQUEST_URL = `${BASE_URL}${endpoint}`;

const response = await axios.get(REQUEST_URL);

  return response.data;
}


export default class SuperHerosAPI {

static getCharacterById(id) {

  return get(id);
}

static  getPowerStatsById(id) {

  return get(`${id}/powerstats`);
}

}