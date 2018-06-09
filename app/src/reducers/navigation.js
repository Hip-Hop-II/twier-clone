
import {AppNavigator} from '../navigators/AppNavigator'
import {NavigationActions} from 'react-navigation'


export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action)
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      )
    default:
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
  }
}
