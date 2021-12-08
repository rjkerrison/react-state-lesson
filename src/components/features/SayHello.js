import React from 'react'

const SayHello = () => {
  const name = 'Robin'

  return (
    <div>
      <h2>Say Hello</h2>
      <p>Hello, {name}!</p>
      <form>
        <input type='text' value={name} name='name' placeholder='Your name' />
      </form>
    </div>
  )
}

export default SayHello
