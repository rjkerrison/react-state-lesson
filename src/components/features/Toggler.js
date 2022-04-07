import { useState } from 'react'
import Button from '../common/Button'

const Toggler = () => {
  const [value, setValue] = useState(false)

  const toggleValue = () => {
    // We can also pass React a function
    // which calculates the new value
    // based on the old one
    setValue((currentValue) => !currentValue)
  }

  return (
    <div>
      <h2>Toggler</h2>
      <div className='button-group'>
        <Button text={value ? 'ON' : 'OFF'} onClick={toggleValue} />
      </div>
    </div>
  )
}

export default Toggler
