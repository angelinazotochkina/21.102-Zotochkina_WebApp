// components/InputField.js
import React from 'react';

const InputField = ({ onChange, value, backgroundColor, textColor, placeholder, disabled, position, type }) => {
    return (
        <input
            type={type}
            onChange={onChange}
            value={value}
            disabled={disabled}
            style={{ backgroundColor, color: textColor, position }}
            placeholder={placeholder}
            className="px-4 py-2 rounded transition-transform transform hover:scale-110"
        />
    );
};

export default InputField;
