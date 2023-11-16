import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = () => {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // Handle login success (e.g., set user session, redirect to admin dashboard)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // Handle login failure
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;