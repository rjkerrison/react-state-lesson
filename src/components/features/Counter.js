import React from 'react'
import Button from '../common/Button'

const Counter = () => {
  return (
    <div>
      <h2>Counter</h2>
      <p>0</p>
      <div className='button-group'>
        <Button text='-1' />
        <Button text='+1' />
        <Button text='+5' />
      </div>
    </div>
  )
}

export default Counter
