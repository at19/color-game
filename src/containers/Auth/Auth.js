import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Auth.css";

const CREATE_AN_ACCOUNT = "Create an account";
const SIGN_IN = "Sign in";

const Auth = ({ signInUser, createUser }) => {
  const [response, setResponse] = useState();
  const [isSignIn, setIsSignIn] = useState(true);
  const [toggleButtonText, setToggleButtonText] = useState(CREATE_AN_ACCOUNT);
  const [headerText, setHeaderText] = useState(SIGN_IN);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    if (!isSignIn) {
      setToggleButtonText(CREATE_AN_ACCOUNT);
      setHeaderText(SIGN_IN);
    } else {
      setToggleButtonText(SIGN_IN);
      setHeaderText(CREATE_AN_ACCOUNT);
    }
  };

  return (
    <div className="form">
      <h3>{headerText}</h3>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (isSignIn) {
            signInUser(values.email, values.password).catch(error => {
              // Sign in failed, Show error message
              setResponse(<div className="error">{error.message}</div>);
              setSubmitting(false);
            });
          } else {
            createUser(values.name, values.email, values.password).catch(
              error => {
                setResponse(<div className="error">{error.message}</div>);
                setSubmitting(false);
              }
            );
          }
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form noValidate>
              {!isSignIn ? (
                <Field placeholder="Name" type="text" name="name" />
              ) : null}
              <Field placeholder="Email" type="email" name="email" />
              <ErrorMessage className="error" name="email" component="div" />
              <Field placeholder="Password" type="password" name="password" />
              {!isSignIn ? (
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />
              ) : null}
              <button type="submit" disabled={isSubmitting}>
                Next
              </button>
              {response}
            </Form>
          </>
        )}
      </Formik>
      <button className="secondary" onClick={toggleSignIn}>
        {toggleButtonText}
      </button>
    </div>
  );
};

export default Auth;
