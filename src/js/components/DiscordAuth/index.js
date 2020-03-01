import React from 'react'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Error from '../Error'

class DiscordAuth extends React.Component {
  componentDidMount () {
    console.log(this.props)
    const code = new URLSearchParams(this.props.location.search).get('code')
    this.props.dispatch({ type: 'GET_TOKEN', code: code })
  }

  render () {
    const { token, history } = this.props
    if (token) {
      history.push('/')
      return null
    } else {
      return <Error />
    }
  }
}
DiscordAuth.propTypes = {
  component: PropTypes.any,
  dispatch: PropTypes.func,
  location: PropTypes.object,
  token: PropTypes.string,
  history: PropTypes.object
}

function mapStateToProps (state) {
  return {
    token: state.token
  }
}

export default withRouter(connect(mapStateToProps)(DiscordAuth))
