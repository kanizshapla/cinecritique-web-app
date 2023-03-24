import React, { useState } from 'react';
import Input from './input';
import axios from 'axios';
import "../assets/Signup.css"

function SignIn() {
  const [isRegistered, setIsRegistered] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
 

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:8081/user/signin', {
        email,
        password
      });
      console.log(response.data);
      setSuccess('You have successfully signed in!');
      
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSignUp = () => {
    setIsRegistered(false);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8081/user/signup', {
        name: {firstName,
        lastName},
        email,
        password,
        confirmPassword
      });
      console.log(response.data); // log the response object
      setIsRegistered(true);
      setSuccess('You have successfully registered!');
      
    } catch (error) {
      setError(error.response.data.message);
    }
  };

 
  const handleForgotPassword = async () => {
    try {
      const response = await axios.patch('http://localhost:8081/user/password', {
        email: forgotPasswordEmail
      });
      console.log(response.data);
      
    } catch (error) {
      setError("Please Try Again")
    }
  };
  
  
  return (
    <div className="sign-in-container">
      {isRegistered ? (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={handleSignIn}>Sign In</button>
          <p>Not registered? <span onClick={handleSignUp}>Sign up</span></p>
          <p>Forgot your password? <span onClick={handleForgotPassword}>Reset Password</span></p>
        
        </>
      ) : (
        <>
          <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="submit" onClick={handleRegister}>Register</button>
          <p>Already registered? <span onClick={() => setIsRegistered(true)}>Sign in</span></p>
        </>
      )}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default SignIn;
