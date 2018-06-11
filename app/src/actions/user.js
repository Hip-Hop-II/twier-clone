import {
  AsyncStorage
} from 'react-native'

export function login () {
  return {
    type: 'LOGIN'
  }
}

export function logout () {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem('@twitteryoutubeclone')
      return dispatch({
        type: 'LOGOUT'
      })
    } catch (error) {
      throw error
    }
  }
}

export function getUserInfo(info={}) {
  return {
    type: 'GET_USER_INFO',
    info
  }
}
