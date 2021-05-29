import axios from 'axios';

const TOKEN = "228993378987846";

const BASE_URL = `https://superheroapi.com/api/${TOKEN}/`;

async function get(endpoint) {
  const REQUEST_URL = `${BASE_URL}${endpoint}`;

const response = await axios.get(REQUEST_URL);

  return response.data;
}

export default class SuperHerosAPI {

  //id	GET	Search by character id. Returns all information of the character.
  static getCharacterById(id) {
    return get(id);
  }
  
  // powerstats	GET	Returns JSON Array of all powerstats of given character.
  static  getPowerStatsById(id) {
    return get(`${id}/powerstats`);
  }

  // id/biography	GET	Returns JSON Array of character's biography.
  static  getBiographysById(id) {
    return get(`${id}/biography`);
  }
  
  // id/appearance	GET	Returns JSON Array of character's appearance.
  static  getAppearanceById(id) {
    return get(`${id}/appearance`);
  }

  // id/image	GET	Returns image url of the character.
  static  getImageById(id) {
    return get(`${id}/image`);
  }

  // id/work	GET	Returns JSON Array of character's work i.e. occupation and operation base.
  static  getWorkById(id) {
    return get(`${id}/work`);
  }

  // id/connections	GET	Returns JSON Array of character's connections.
  static  getConnectionsById(id) {
    return get(`${id}/connections`);
  }

  // id/name	GET	Search character by name. Returns character id.
  static  searchByName(name) {
    return get(`search/${name}`);
  }
}