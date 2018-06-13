
import {AppNavigator} from '../navigators/AppNavigator'
import {NavigationActions} from 'react-navigation'


export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action)
      const newsState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      )
      return newsState || state
    default:
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
  }
}
