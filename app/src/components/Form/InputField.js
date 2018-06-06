import React, {Component} from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import {colors} from '../../utils/constants'

export default class InputField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    inputColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    type: PropTypes.string
  }
  render () {
    const {
      placeholder,
      keyboardType,
      onChangeText,
      inputColor,
      borderBottomColor,
      type
    } = this.props
    const color = inputColor || colors.SECONDARY
    const secureTextEntry = type === 'password'
    return (
      <TextInput
      placeholder={placeholder}
      autoCorrect={false}
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.inputField, {color, borderBottomColor}]}
      />
    )
  }
}

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 2
  }
})
