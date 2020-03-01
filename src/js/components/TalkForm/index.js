import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TalkForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '', class: '', spec: '' }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (key, e) {
    const state = {}
    state[key] = e.target.value
    this.setState(state)
  }

  addTalk () {
    if (!(this.state.name === '')) {
      this.props.dispatch({ type: 'ADD_TALK', talk: { name: this.state.name } })
    }
  }

  render () {
    return (
      <div className='talk-form box has-text-centered'>
        <h2 className='subtitle'>Create a new talk</h2>
        <div className='field'>
          <div className='control'>
            <input className='input' type='text' placeholder='Name' value={this.state.name} onChange={e => this.onInputChange('name', e)} />
          </div>
        </div>
        <div className='button' disabled={this.state.name === ''} onClick={() => this.addTalk()} >Add a new talk</div>

      </div>

    )
  }
}
TalkForm.propTypes = {
  dispatch: PropTypes.func
}
export default connect()(TalkForm)
