import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import IronManImage from './assets/ironman.png';
import axios from 'axios';

export default class LoginForm extends Component {
  render() {
    const validateLogin = (e) => {
      e.preventDefault(); 
      axios.get('http://challenge-react.alkemy.org/',{params:{
        email:'challenge@alkemy.org', password:'react'
      }})
      .then(data=>{
console.log(data)
      })
      .catch()
      .then()
    }

    return (

      <Container>
          <div style={{marginTop:"10vh"}}>
        <Row className="justify-content-center align-middle">
          <Col xl={2} md={3} fluid="sm">
            <img src={IronManImage} alt="" style={{width:"100%"}}/>
          </Col>
        </Row>
        <Row className="justify-content-center align-middle">
          <Col>
              <p className="text-center">Debes iniciar sesión para poder acceder a este sition.</p>
          </Col>
        </Row>

        <Row className="justify-content-center align-middle">
          <Col lg={5} xs={8}>
            <Form onSubmit={validateLogin}>
              <Form.Group controlId="userEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo Electrónico" />
              </Form.Group>
        
              <Form.Group controlId="userPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="userPassword">
                <Button variant="primary" type="submit" >
                  Iniciar Sesión
                </Button>
              </Form.Group>
            </Form>
         
          </Col>
        </Row>
        </div>
      </Container>
    )
  }
}
