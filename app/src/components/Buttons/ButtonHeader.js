import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default class ButtonHeader extends Component {
  render () {
    const {buttonPress, icons, buttonStyle} = this.props
    return (
      <TouchableOpacity onPress={buttonPress} style={[styles.buttonWrapper, buttonStyle]}>
        {icons}
      </TouchableOpacity>
    )
  }
}

ButtonHeader.propTypes = {
  buttonPress: PropTypes.func.isRequired,
  icons: PropTypes.element
}
const styles = StyleSheet.create({
  buttonWrapper: {
  }
})
