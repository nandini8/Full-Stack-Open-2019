import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <div><h1>{header}</h1></div>

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistic = ({text, value}) => {
  if(text === 'positive'){
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
  )
  }
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

// const Average = (props) => {
//   const average = (props.good + (props.bad * -1) + (props.neutral * 0)) / (props.good + props.bad + props.neutral)
//   return (
//     <Statistic text='average' value={average.toFixed(1)}/>
//   )
// }

// const Positive = ({good, total}) => {
//   const positive = (good / total  * 100)
//   return (
//     <Statistic text='positive' value={positive.toFixed(1)}/>
//   )
// }

const Statistics = ({good, bad, neutral}) => {

  if (good === 0 && bad === 0 && neutral === 0){
    return (
      <table>
        <tbody>
        <Statistic text="No feedback given"/>
        </tbody>
      </table>
    )
  }
  const average = (good + (bad * -1) + (neutral * 0)) / (good + bad + neutral) 
  const total = (good / (good + bad + neutral)  * 100)
  return (
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={good + neutral + bad} />
          <Statistic text='average' value={average.toFixed(1)} />
          <Statistic text='positive' value={total.toFixed(1)} />
        </tbody>
      </table>
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
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)