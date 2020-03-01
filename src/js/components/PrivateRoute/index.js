import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class PrivateRoute extends React.Component {
  render () {
    const { token, history, component: Component, ...rest } = this.props

    if (token === null) {
      history.push('/login')
    }

    return (
      <Route {...rest} render={
        (props) => {
          return <Component {...props} />
        }
      }/>
    )
  }
}

PrivateRoute.propTypes = {
  dispatch: PropTypes.func,
  location: PropTypes.object,
  component: PropTypes.any,
  history: PropTypes.object,
  token: PropTypes.string
}

function mapStateToProps (state) {
  return {
    token: state.token
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
