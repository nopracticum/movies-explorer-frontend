import React from 'react';

import './InputField.css';

function InputField({errorMessage, disabled, ...restProps}) {
  return (
    <div className="input-field">
      <label className="input-field__title input-field__text">{restProps.title}</label>
      <input
        className="input-field__input"
        required
        
        {...restProps}
        disabled={disabled}
      />
      <span className={`input-field__error-message input-field__text ${errorMessage !== '' ? "active" : ""}`}>{errorMessage}</span>
    </div>
  );
}

export default InputField;
