import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import MaterIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import BackButton from '../components/Buttons/BackButton'
import {colors} from '../utils/constants'

class SignupScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <BackButton
          buttonPress={() => this.props.navigation.goBack()} 
            icons={
              <MaterIcon 
              size={20}
              name="arrow-back"
              color={colors.PRIMARY}
              />
            }
          />
          <View style={styles.headerTitle}>
            <FontAwesomeIcon
              name="twitter"
              size={26}
              color={colors.PRIMARY}
              />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40
  },
  heading: {
    paddingLeft: 10,
    flexDirection: 'row'
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  }
})

export default SignupScreen
