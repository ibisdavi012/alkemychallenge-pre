import axios from 'axios';
const AUTH_URL = 'http://challenge-react.alkemy.org/';
const AUTH_TOKEN_NAME = 'alkemyHeroesAppToken';

export default class UserLogin {

  constructor(){
    this.started = () => {}
    this.success = () => {}
    this.failed = () => {}
    this.error = () => {}
    this.completed = () => {}
  }

  handleAuthenticationResponse = (response) => {
         if (response.data.token && typeof this.success === "function") {
          localStorage.setItem(AUTH_TOKEN_NAME, response.data.token);
          this.success(response.data.token);
         }
          else{
            if (typeof this.failed === "function")
              this.failed(response);
          }
  }

  handleAuthenticationError = (error) => {
  
    if (error.response === undefined) {
      if(typeof this.error === "function")
        this.error(error.message);
    }
    else {
      if (typeof this.failed === "function")
        this.failed(error.response);
    }
  }

  handleAuthenticationCompleted = () => {
      this.isUserAuthenticated();
      if (typeof this.completed === "function") 
        this.completed();
  }

  authenticate(credentials) {
    if(typeof this.started === "function")
        this.started();

   axios.post(AUTH_URL, credentials)
    .then(this.handleAuthenticationResponse)
    .catch(this.handleAuthenticationError)
    .then(this.handleAuthenticationCompleted);
  
  }

  getCurrentToken() {
    return localStorage.getItem('AUTH_TOKEN_NAME'); 
  }

  isUserAuthenticated() {
    const currentToken = this.getCurrentToken();
    return currentToken !== null;
  }
}