// components/Switch.js
import React from 'react';

const Switch = ({ text, checked, onChange, backgroundColor, textColor, position }) => {
    return (
        <div style={{ position }} className="flex items-center">
            <label className="mr-2" style={{ color: textColor }}>{text}</label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                style={{ backgroundColor }}
                className="form-checkbox"
            />
        </div>
    );
};

export default Switch;
