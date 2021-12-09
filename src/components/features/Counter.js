import React from 'react'
import Button from '../common/Button'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const addToCount = (num) => {
    // Instruct React that we want the count to update on the next cycle
    setCount(count + num)
    // This displays the previous (before the state update) value
    console.log(count)
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <div className='button-group'>
        <Button text='-1' onClick={() => addToCount(-1)} />
        <Button text='+1' onClick={() => addToCount(1)} />
        <Button text='+5' onClick={() => addToCount(5)} />
      </div>
    </div>
  )
}

export default Counter
