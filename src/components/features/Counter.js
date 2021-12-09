import React from 'react'
import Button from '../common/Button'

const Counter = () => {
  let count = 0

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <div className='button-group'>
        <Button text='-1' />
        <Button text='+1' />
        <Button text='+5' />
      </div>
    </div>
  )
}

export default Counter
