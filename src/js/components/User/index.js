import React from 'react'
import Layout from '../Layout'
import TalksList from '../TalksList'
import TalkForm from '../TalkForm'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class User extends React.Component {
  componentDidMount () {
    this.props.dispatch({ type: 'GET_USER' })
  }

  render () {
    if (this.props.user === null) return <div>Loading</div>
    return (
      <Layout>
        <h1 className='title'>Welcome {this.props.user.username}</h1>
        <div className='columns'>
          <div className='column is-8'>
            {JSON.stringify(this.props.user)}
          </div>
          <div className='column is-4'>
            <TalkForm/>
            <TalksList/>
          </div>
        </div>
      </Layout>
    )
  }
}

User.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(User)
