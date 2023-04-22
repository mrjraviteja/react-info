import Logo from '../assets/React-icon.png'

function Header(){
    return(
      <header>
        <nav className='nav'>
          <img src={Logo} alt="React-Logo" className='nav-logo'/>
          <h3>ReactFacts</h3>
          <h4>React Course - Project 1</h4>
        </nav>
      </header>
    )
}

export default Header