import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ButtonHeader from '../Buttons/ButtonHeader'
import {colors} from '../../utils/constants'

class SignupForm extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <ButtonHeader
        buttonPress={() => this.props.onBackPress()} 
          icons={
            <Icon 
            size={20}
            name="arrow-back"
            color={colors.PRIMARY}
            />
          }
          buttonStyle={{paddingLeft: 10}}
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
