import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

const initialState = {
  error: '',
  errorStatusCode: '',
  loggingIn: false,
  fetchingData: false,
  friends: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START: 
      return {
        ...state,
        error: '',
        errorStatusCode: '',
        loggingIn: true
      }

    case LOGIN_SUCCESS:
     return {
       ...state,
       error: '',
       errorStatusCode: '',
       loggingIn: false
     }

    case LOGIN_FAILURE: 
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        loggingIn: false
      }
      
    default:
      return state
  }
}

export default reducer