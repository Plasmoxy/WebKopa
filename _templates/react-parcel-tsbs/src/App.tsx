import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from "react"
import { render } from "react-dom"
import './App.scss'
import { Container, Button, Card } from 'react-bootstrap'

function App() {
  return <>
    <Container className="app-content">
      
    </Container>
  </>
}

render(<App />, document.getElementById("reactRoot"))
