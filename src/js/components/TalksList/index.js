import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './styles.scss'

class TalksList extends React.Component {
  componentDidMount () {
    this.props.dispatch({ type: 'GET_USER_TALKS' })
  }

  render () {
    const { talks, dispatch } = this.props
    if (talks.length === 0) {
      return <div className='content'>No talk found, use the form above to add a new one.</div>
    }
    return (
      <div className='talks-list'>
        {talks.map((talk) => {
          return (
            <div className='level' key={talk._id}>
              <div className='level-left'>
                <div className='level-item'>
                  <div className='has-text-weight-bold'>{talk.name}</div>
                </div>
              </div>
              <div className='level-right'>
                <div className='level-item'>
                  <button className='button is-text' onClick={() => dispatch({ type: 'DELETE_USER_TALK', talkId: talk._id })}>
                    <i className='fa fa-trash-alt' />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    )
  }
}

TalksList.propTypes = {
  dispatch: PropTypes.func,
  talks: PropTypes.array
}

function mapStateToProps (state) {
  return {
    talks: state.talks
  }
}

export default connect(mapStateToProps)(TalksList)
