import axios from 'axios';
const AUTH_URL = 'http://challenge-react.alkemy.org/';

export default class UserLogin {

  constructor(){

    this.success = () => {}
    this.failed = () => {}
    this.error = () => {}
    this.completed = () => {}

  }

  handleAuthenticationResponse = (response) => {
    if(response.data.token) {
      console.log(response.data.token);
      this.success(response.data.token);
    }
  }

  handleAuthenticationError = (error) => {
    console.log('handleAuthenticationError:',error);
  }

  handleAuthenticationCompleted = () => {

  }

  authenticate(credentials) {

    axios.post(AUTH_URL, credentials)
    .then(this.handleAuthenticationResponse)
    .catch(this.handleAuthenticationError)
    .then(this.handleAuthenticationCompleted);
  }

  isUserAuthenticated() {

  }
}