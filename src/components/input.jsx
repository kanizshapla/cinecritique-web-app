import React from 'react';

function Input(props) {
  const { label, type, placeholder, value, onChange } = props;
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
