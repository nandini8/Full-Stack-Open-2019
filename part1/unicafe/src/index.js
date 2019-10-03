import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <div><h1>{header}</h1></div>

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Content = ({text, value}) => {
  return (
    <div>
      <p><h4>{text} {value}</h4></p>
    </div>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    setGood(good+1)
  }
  const handleNeutralClicks = () => {
    setNeutral(neutral+1)
  }
  const handleBadClicks = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Header header='give feedback'/>
      <Button onClick={handleGoodClicks} text='good'/>
      <Button onClick={handleNeutralClicks} text='neutral'/>
      <Button onClick={handleBadClicks} text='bad'/>
      <Header header='statistics'/>


      <Content text='good' value={good} />
      <Content text='neutral' value={neutral} />
      <Content text='bad' value={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)