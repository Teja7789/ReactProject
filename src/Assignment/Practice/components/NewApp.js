import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const  NewApp = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const initialValues = {
    name: '',
    email: '',
    address: '',
    mobileNumber: '',
    password: '',
    education: '',
    message: '',
  };

  const handleSubmit = async (values) => {
    if (step === totalSteps) {
      try {
        const response = await axios.post('API_URL', values);
        console.log('Data submitted successfully!', response.data);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    } else {
      setStep(step + 1);
    }
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
                {step === 1 && (
                  <>
                    <Field type="text" name="name" placeholder="Name" />
                    <Field type="email" name="email" placeholder="Email" />
                  </>
                )}
                {step === 2 && (
                  <>
                    <Field type="text" name="address" placeholder="Address" />
                  </>
                )}
                {step === 3 && (
                  <>
                    <Field type="tel" name="mobileNumber" placeholder="Mobile Number" />
                  </>
                )}
                {step === 4 && (
                  <>
                    <Field type="password" name="password" placeholder="Password" />
                  </>
                )}
                {step === 5 && (
                  <>
                    <Field type="text" name="education" placeholder="Education" />
                  </>
                )}
                {step === 6 && (
                  <>
                    <Field as="textarea" name="message" placeholder="Message" />
                  </>
                )}

                <div className="stepper">
                  <div className="steps">
                    {Array.from({ length: totalSteps }, (_, index) => (
                      <div
                        key={index}
                        className={`step ${step === index + 1 ? 'active' : ''}`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="primary"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleSubmit()}
                  disabled={isSubmitting}
                >
                  {step === totalSteps ? 'Submit' : 'Next'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default NewApp;