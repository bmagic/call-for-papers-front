import React from 'react'
import Error from '../Error'
const Login = () =>

  <div className='hero is-fullheight'>
    <div className='hero-body'>
      <div className='column is-4 is-offset-4'>
        <Error/>
        <div className='box has-text-centered'>
          <h1 className='title'>Call For Papers</h1>
          <a className='button is-large' href='https://discordapp.com/api/oauth2/authorize?client_id=682243386228473873&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth-discord&response_type=code&scope=identify'>Connexion</a>
        </div>
      </div>
    </div>
  </div>

export default Login
