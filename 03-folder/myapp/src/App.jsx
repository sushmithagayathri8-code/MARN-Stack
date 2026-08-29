import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="parent">
      <Card user='Bunty' age={21}/>
      <Card user='Alice' age={25}/>
      <Card user='Bob' age={30}/>
      <Card user='Charlie' age={35}/>
    </div>
  )
}

export default App