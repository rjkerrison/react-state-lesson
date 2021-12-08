import React from 'react'
import Button from '../common/Button'

const Toggler = () => {
  const value = false

  return (
    <div>
      <h2>Toggler</h2>
      <Button text={value ? 'ON' : 'OFF'} />
    </div>
  )
}

export default Toggler
