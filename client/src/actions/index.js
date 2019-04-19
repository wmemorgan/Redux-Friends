import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post(`${API_ENDPOINT}.netlify/functions/server/api/login`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem('token')
      }
      dispatch({ type: LOGIN_FAILURE, payload: err.response })
    })
}

