import axios from 'axios'
import axiosWithAuth from '../utils/axiosAuth'

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

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axiosWithAuth()
    .get(`${API_ENDPOINT}.netlify/functions/server/api/friends`)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    })
}

export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS'
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE'

export const addData = (friend) => dispatch => {
  axiosWithAuth()
    .post(`${API_ENDPOINT}.netlify/functions/server/api/friends/`, friend)
    .then(res => {
      dispatch({ type: ADD_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: ADD_DATA_FAILURE, payload: err.response })
    })
}

export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE'

export const deleteData = (id) => dispatch => {
  axiosWithAuth()
    .delete(`${API_ENDPOINT}.netlify/functions/server/api/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: DELETE_DATA_FAILURE, payload: err.response })
    })
}

export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS'
export const UPDATE_DATA_FAILURE = 'UPDATE_DATA_FAILURE'

export const updateData = (friend) => dispatch => {
  axiosWithAuth()
    .put(`${API_ENDPOINT}.netlify/functions/server/api/friends/${friend.id}`, friend)
    .then(res => {
      dispatch({ type: UPDATE_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: UPDATE_DATA_FAILURE, payload: err.response })
    })
}

