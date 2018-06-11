const initialState = {
  token: null,
  isAuthenticated: false,
  info: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'GET_USER_INFO':
      return {
        ...state,
        info: action.info
      }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}
