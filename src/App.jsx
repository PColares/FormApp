import React, { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import data from './assets/data.png'

function App() {
  const [SucessState, setSucessState] = useState(true);

  const Title = "Intern Sign Up"

  function handleState(SucessState) {
    setSucessState(SucessState)
  }

  return (
    <div className="App-Container">

      <div className="Container">

        <header className="App-header">
          <img src={data} className="App-logo" alt="data icon" />
          {SucessState ? (
            <>
              <h1>{Title}</h1>
              <button
                onClick={() => {

                  setSucessState(false)

                }}
              >
                Back
              </button>
            </>
          ) : <Form FormState={handleState} />}
        </header>
      </div>
    </div>
  )
}

export default App
