import React, { useEffect } from 'react'
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
