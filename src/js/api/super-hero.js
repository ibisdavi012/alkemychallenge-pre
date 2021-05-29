import axios from 'axios';

const TOKEN = "228993378987846";
const BASE_URL = `https://superheroapi.com/api/${TOKEN}/`;


async function get(id,endpoint) {

  const jsonResponse = await axios.get(`${BASE_URL}/${id}${endpoint}`, { headers:{crossdomain: true }});

  return "";
}

export function GetCharacterById(id)
{
  return get(id, '');
}
