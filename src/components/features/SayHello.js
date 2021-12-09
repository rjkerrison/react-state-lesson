import React from 'react'

const SayHello = () => {
  const name = 'Robin'

  return (
    <div>
      <h2>Say Hello</h2>
      <p>Hello, {name}!</p>
      <form>
        <div className='input-group'>
          <label htmlFor='name'>Your name:</label>
          <input
            type='text'
            value={name}
            id='name'
            name='name'
            placeholder='Your name'
          />
        </div>
      </form>
    </div>
  )
}

export default SayHello
