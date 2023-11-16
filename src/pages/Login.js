// src/pages/Login.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    // Handle login success
  };

  const onFailure = (res) => {
    console.log('Login failed:', res);
    // Handle login failure
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default Login;
