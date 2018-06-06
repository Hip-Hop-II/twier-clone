import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BackButton from '../Buttons/BackButton'
import {colors} from '../../utils/constants'

class SignupForm extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <BackButton
        buttonPress={() => this.props.onBackPress()} 
          icons={
            <Icon 
            size={20}
            name="arrow-back"
            color={colors.PRIMARY}
            />
          }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40
  }
})

export default SignupForm
