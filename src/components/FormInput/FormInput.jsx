import React, { useState } from 'react'
import './FormInput.css'

function FormInput({ variant, text, error, ...others }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <>
            <div className="container">
                <label htmlFor={others.text}>{text}</label>

                <input
                    className={variant === "short" ? "form-input-short" : "form-input-long"}
                    id={others.id}
                    onBlur={handleFocus}
                    onFocus={() => setFocused(true)}
                    focused={focused.toString()}
                    {...others}
                />
                <span className="error">{error}</span>
            </div>
        </>
    )
}

export default FormInput;