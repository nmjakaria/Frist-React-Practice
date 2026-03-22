import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';
import CounterComponent from './SetCounter';
import Batchman from './Batchman';


function App() {

  return (
    <>
    <h1>Hello React</h1>

      <CounterComponent />
      {/* <Counter /> */}
      <Batchman></Batchman>

    </>
  )
}

export default App
