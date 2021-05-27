import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <form className="login-fom">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
           <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
          <button>Iniciar Sesión</button>
      </form>
    )
  }
}
