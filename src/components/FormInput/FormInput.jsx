import React, { useState } from 'react'
import './FormInput.css'

function FormInput({ variant, text, error, ...others }) {

    return (
        <>
            <div className="container">
                <label htmlFor={others.text}>{text}</label>

                <input
                    className={variant === "short" ? "form-input-short" : "form-input-long"}
                    id={others.id}
                    {...others}
                />
                <span className="error">{error}</span>
            </div>
        </>
    )
}

export default FormInput;