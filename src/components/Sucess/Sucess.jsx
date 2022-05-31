import React from 'react'
import './Sucess.css'

function Sucess({ onButtonClick }) {

    return (
        <>
            <h1>Sucess!</h1>
            <button
                className="BackButton"
                onClick={() => {
                    onButtonClick(false)
                }}>
                Go Back!
            </button>
        </>
    )
}

export default Sucess;