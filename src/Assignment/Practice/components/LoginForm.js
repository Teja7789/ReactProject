import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Container, Row, Col } from 'react-bootstrap';

const LoginForm = ({ onLogin }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    // Implement your login logic here
    // For simplicity, let's just set isLoggedIn to true
    onLogin();
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;