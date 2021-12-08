import logo from './logo.svg'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Hello</h1>
        <picture style={{ width: '20em' }}>
          <img src={logo} alt='React logo' />
        </picture>
      </header>
      <main>
        <p>Hi there</p>
      </main>
      <footer>
        <p>&copy; Robin James Kerrison 2021</p>
      </footer>
    </div>
  )
}

export default App
