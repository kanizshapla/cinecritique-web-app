import React, { useState } from 'react';
import Input from './input';
import Button from './button';
import axios from 'axios';
import '../assets/Signup.css';

function ChangePassword({ setSuccess }) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleChangePassword = async () => {
      try {
        const response = await axios.patch('http://localhost:8081/user/password', {
          oldPassword,
          newPassword
        });
        console.log(response.data);
        setSuccess(response.data.message);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
  
    return (
      <div className="sign-in-container">
        <div className="input-container">
          <Input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          <Input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={handleChangePassword}>Reset Password </button>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }
  
  export default ChangePassword;