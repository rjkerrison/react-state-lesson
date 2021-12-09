import React from 'react'
import Button from '../common/Button'

const Toggler = () => {
  const value = false

  return (
    <div>
      <h2>Toggler</h2>
      <div className='button-group'>
        <Button text={value ? 'ON' : 'OFF'} />
      </div>
    </div>
  )
}

export default Toggler
