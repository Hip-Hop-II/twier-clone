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
      type,
      value
    } = this.props
    const color = inputColor || colors.SECONDARY
    const secureTextEntry = type === 'password'
    const borderColor = borderBottomColor || colors.LIGHT_GRAY
    return (
      <TextInput
      value={value}
      placeholder={placeholder}
      autoCorrect={false}
      keyboardType={keyboardType || 'default'}
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.inputField, {color, borderBottomColor: borderColor}]}
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
