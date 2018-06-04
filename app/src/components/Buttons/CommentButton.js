import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default class CommentButton extends Component {
  render () {
    const {buttonPress, icons} = this.props
    return (
      <TouchableOpacity onPress={buttonPress}>
        {icons}
      </TouchableOpacity>
    )
  }
}

CommentButton.propTypes = {
  buttonPress: PropTypes.func.isRequired,
  icons: PropTypes.element
}