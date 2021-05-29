import React, { Component } from 'react'
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class LoginForm extends Component {
 
  render() {

    const formInitialValues = {email:'', password:''};
    
    function formValidationSchema(values) {
      const schema = Yup.object({
        email: Yup.string().email('La dirección de correo no tiene un formato válido.').required('La dirección de correo es obligatoria.'),
        password: Yup.string().required('La contraseña es requerida para poder validar su acceso.')
      });
    
      return schema;
    }

    return (
      <React.Fragment>
        <Row className="justify-content-center align-middle">
          <Col lg={5} xs={8}>            
         <Formik initialValues={formInitialValues} validationSchema={formValidationSchema} onSubmit={this.props.onSubmit} >
           {(formik)=>(<Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="userEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo Electrónico" name="email" {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
              </Form.Group>
        
              <Form.Group controlId="userPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" name="password" {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}

              </Form.Group>
              <Form.Group controlId="formSubmit">
                <Button variant="primary" type="submit" >
                  Enviar
                </Button>
              </Form.Group>
            </Form>)}
         </Formik>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

LoginForm.defaultProps = {
  onSubmit: (values, setSubmitting) =>{}
}
