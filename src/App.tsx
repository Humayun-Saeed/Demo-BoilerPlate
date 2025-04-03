import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from '@pages/Home/Home'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "LIGHT");
  }, []);
  
  return (
    <React.Fragment>
     <HomePage />
    </React.Fragment>
  )
}

export default App
