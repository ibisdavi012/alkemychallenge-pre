import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import IronManImage from './assets/ironman.png';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default class LoginForm extends Component {
  render() {
    const validateLogin = (e) => {
      e.preventDefault(); 
      /*axios.post(http://challenge-react.alkemy.org/',{email:'challenge@alkemy.org', password:'react'})
      .then(data>{console.log(data)})
      .catch()
      .then(()=>{})*/
    }
      const initialValues = {email:'', password:''};

      const onSubmit = (values, setSubmitting) => {
        console.log('Submitting',values);
      }

      const validationSchema = values => {
        const schema = Yup.object({
          email: Yup.string().email('La dirección de correo no tiene un formato válido.').require('La dirección de correo es obligatoria.'),
          password: Yup.string().required('La contraseña es requerida para poder validar su acceso.')
        });

        console.log('Validating',values);

        return schema;
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
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
           {(formik)=>(<Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="userEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo Electrónico" name="email" {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </Form.Group>
        
              <Form.Group controlId="userPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" name="password" {...formik.getFieldProps('password')}/>
              </Form.Group>
              <Form.Group controlId="userPassword">
                <Button variant="primary" type="submit" >
                  Iniciar Sesión
                </Button>
              </Form.Group>
            </Form>)}
         </Formik>
          </Col>
        </Row>
        </div>
      </Container>
    )
  }
}
