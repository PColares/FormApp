import React, { useState } from 'react'
import Sucess from './components/Sucess/Sucess'
import Form from './components/Form/Form'
import data from './assets/data.png'

import './App.css'

function App() {
  const [SucessState, setSucessState] = useState(false);


  function handleState(SucessState) {
    setSucessState(SucessState)
  }

  return (
    <div className="App-Container">
      <div className="Container">
        <header className="App-header">
          <img src={data} className="App-logo" alt="data icon" />
          {SucessState ? (

            <Sucess onButtonClick={handleState} />

          ) : <Form FormState={handleState} />}

        </header>
      </div>
    </div>
  )
}

export default App
