import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  ADD_DATA_SUCCESS, ADD_DATA_FAILURE, DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE, UPDATE_DATA_SUCCESS, UPDATE_DATA_FAILURE
} from '../actions'

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

    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        errorStatusCode: '',
        fetchingData: true,
        friends: []
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: '',
        fetchingData: false,
        friends: action.payload
      }

    case FETCH_DATA_FAILURE:
      return {
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingData: false,
        friends: []
      }

    case ADD_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: '',
        fetchingData: false,
        friends: action.payload
      }

    case ADD_DATA_FAILURE:
      return {
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingData: false,
        friends: []
      }

    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: '',
        fetchingData: false,
        friends: action.payload
      }

    case DELETE_DATA_FAILURE:
      return {
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingData: false,
        friends: []
      }

    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: '',
        fetchingData: false,
        friends: action.payload
      }

    case UPDATE_DATA_FAILURE:
      return {
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingData: false,
        friends: []
      }
      
    default:
      return state
  }
}

export default reducer