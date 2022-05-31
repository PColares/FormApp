import React from 'react'
import './Checkbox.css'

function CheckBox({ label, value, onChange }) {

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
        </div>)
}

export default CheckBox;