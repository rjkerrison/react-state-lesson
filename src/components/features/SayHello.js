import React from 'react'

const SayHello = () => {
  const [name, setName] = React.useState('Robin')

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
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SayHello
