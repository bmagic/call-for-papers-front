import { all, takeLatest, put, select } from 'redux-saga/effects'
import { deleteUrl, getUrl, postUrl } from './request'

function * getUser () {
  const state = yield select()
  try {
    const result = yield getUrl('http://localhost:3000/v1/user', state)
    yield put({ type: 'GET_USER_SUCCESS', user: result.data })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}

function * getToken (action) {
  const state = yield select()
  try {
    const result = yield getUrl(`http://localhost:3000/v1/auth/discord?code=${action.code}`, state)
    console.log(result)
    yield put({ type: 'GET_TOKEN_SUCCESS', token: result.data.token })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}

function * getTalks () {
  const state = yield select()
  try {
    const result = yield getUrl('http://localhost:3000/v1/talks', state)
    yield put({ type: 'GET_TALKS_SUCCESS', talks: result.data })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}

function * addTalk (action) {
  const state = yield select()
  try {
    yield postUrl('http://localhost:3000/v1/talks', action.talk, state)
    yield put({ type: 'GET_TALKS' })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}
function * deleteTalk (action) {
  const state = yield select()
  try {
    yield deleteUrl(`http://localhost:3000/v1/talks/${action.talkId}`, state)
    yield put({ type: 'GET_TALKS' })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}

export default function * rootSaga () {
  yield takeLatest('GET_USER', getUser)
  yield takeLatest('GET_TOKEN', getToken)
  yield takeLatest('GET_TALKS', getTalks)
  yield takeLatest('ADD_TALK', addTalk)
  yield takeLatest('DELETE_TALK', deleteTalk)

  yield all([])
}
