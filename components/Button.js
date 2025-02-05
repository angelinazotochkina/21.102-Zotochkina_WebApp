// components/Button.js
import React from 'react';

const Button = ({
                    onClick,
                    backgroundColor = 'bg-green-700',
                    textColor = 'text-white',
                    text,
                    disabled = false,
                    position = 'static',
                    className = ''
                }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{ position }}
            className={`px-4 py-2 rounded transition-transform transform hover:scale-110 ${backgroundColor} ${textColor} ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
