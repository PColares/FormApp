import React from 'react'
import './Checkbox.css'

function CheckBox({label, value, onChange, error}) {

    return (
        <div className="CheckboxContainer">
            <label>
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={value}
                    onChange={onChange}
                />
                {label}
            </label>
             <span className="error">{error}</span>
        </div>)
}

export default CheckBox;