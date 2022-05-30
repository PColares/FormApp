import React from 'react'
import './App.css'
import Form from './components/Form'
import data from './assets/data.png'

function App() {

  const Title = "Intern Sign Up"

  return (
    <>
      <div className="Container">

        <header className="App-header">
          <img src={data} className="App-logo" alt="data icon" />
          <h1>{Title}</h1>
          <Form />
        </header>
      </div>
    </>
  )
}

export default App
