import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';
import CounterComponent from './SetCounter';
import Batchman from './Batchman';
import Users from './Users';
import Friends from './Friends';
import { Suspense} from 'react';


function App() {
  
  const featchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

    const fetchFriend = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      return res.json();
    }

    const fetchPromise = fetchFriend();

  return (
    <>
    <h1>Hello React</h1>

      <CounterComponent />
      {/* <Counter /> */}
      <Batchman></Batchman>
      <Suspense fallback={<div style={{border:'2px solid red', padding:'20px', borderRadius:'10px', margin:'10px'}}><h3>Loading Users...</h3></div>}>
        <Users featchUsers = {featchUsers}></Users>
      </Suspense>

      <Suspense fallback={<div style={{border:'2px solid red', padding:'20px', borderRadius:'10px', margin:'10px'}}><h3>Loading Friends Data...</h3></div>}>
        <Friends featchFriend={fetchPromise}></Friends>
      </Suspense>
    </>
  )
}

export default App
