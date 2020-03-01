const initialState = {
  loading: false,
  token: null,
  errors: [],
  user: null,
  talks: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {
        ...state,
        errors: [...state.errors, action.error]
      }
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: []
      }
    case 'CLEAR_TOKEN':
      return {
        ...state,
        token: null
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: action.user
      }
    case 'GET_TOKEN_SUCCESS':
      return {
        ...state,
        token: action.token
      }
    case 'GET_TALKS_SUCCESS':
      return {
        ...state,
        talks: action.talks
      }
    default:
      return state
  }
}

export default reducer
