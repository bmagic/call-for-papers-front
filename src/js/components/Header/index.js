import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '../LogoutButton'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <header className='header has-background-grey-light'>
        <div className='container'>
          <nav className='navbar has-background-grey-light'>
            <div className="navbar-brand">
              <Link className="navbar-item" to="/"><h1>Call For Papers</h1></Link>
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbar" onClick={() => this.toggleMenu()}>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
              </a>
            </div>
            <div id="navbar" className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
              <div className="navbar-end">
                <Link to="/user" className="navbar-item">Profile</Link>
                <div className='navbar-item'> <LogoutButton/></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
