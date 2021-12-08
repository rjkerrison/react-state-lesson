import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header>
      <h1>Learning React State by Example</h1>
      <picture style={{ width: '5rem' }}>
        <img src={logo} alt='React logo' />
      </picture>
    </header>
  )
}

export default Header
