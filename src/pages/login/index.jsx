import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import {Redirect} from 'react-router-dom';
import UserAuthentication from '../../js/api/user-authentication';
import LoginForm from '../../components/LoginForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormImage from './assets/ironman.png';
import DismissAlert from '../../components/DismissAlert';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {authentication_status: 'standby'}
  }

  render() {
    
    const authentication = new UserAuthentication();

    authentication.success = (e) => {
      this.setState({authentication_status:'success'});
    }
    
    authentication.failed = (e) => {
      this.setState({authentication_status:'failed'});
    }
    
    authentication.error = (e) => {
      this.setState({authentication_status:'error'});
    }
        
    const onSubmit = (values) => {
      authentication.validate(values);
    }

    const token = localStorage.getItem('alkemyHeroesAppToken');
  
    return (

      <Container>
      
      <Row className="justify-content-center align-middle">
          <Col xl={2} md={3} fluid="sm">
            <img src={FormImage} alt="" style={{width:"100%"}}/>
          </Col>
        </Row>
        <Row className="justify-content-center align-middle">
          <Col>
              <p className="text-center">Debes iniciar sesión para poder acceder a este sition.</p>
          </Col>
        </Row>
        <Row className="justify-content-center align-middle">
        <Col lg={5} xs={8}>     
          {this.state.authentication_status === "failed" && <DismissAlert title="Error de autenticación!" message="Revise sus credenciales de acceso."/>}
          {this.state.authentication_status === "error" && <DismissAlert title="Error General!" message="Se ha producido un error al intentar validar sus credenciales."/>}
        </Col>
      </Row>
      <LoginForm onSubmit={onSubmit} /> 

      {(this.state.authentication_status === "success" || token) && <Redirect to="/" />}

      </Container>
    )
  }
}
