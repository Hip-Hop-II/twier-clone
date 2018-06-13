import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import {withApollo} from 'react-apollo'
import {connectActionSheet} from '@expo/react-native-action-sheet'
import {colors, fakerAvatarImg} from '../../utils/constants'
import Loading from '../Loading'
import PropTypes from 'prop-types'
import {logout} from '../../actions/user'

const avatar_size = 30
const avatar_radius = avatar_size / 2

class HeaderAvatar extends Component {
  _avatarOnpress = () => {
    this.props.showActionSheetWithOptions({
      options: ['登出', '取消'],
      cancelButtonIndex: 1
    },
      buttonIndex => {
        this.props.client.resetStore()
        return this.props.logout()
      })
  }
  render() {
    const {headerLeft, info, avatarOnPress} = this.props
    if (!info.avatar) {
      return (
        <TouchableOpacity style={styles.imageWrapper} disabled={!info.avatar} onPress={this._avatarOnpress}>
          <Loading size="small" />
        </TouchableOpacity>
      )
    }
    return (
        <TouchableOpacity style={styles.imageWrapper} disabled={!info.avatar} onPress={this._avatarOnpress}>
          <Image style={styles.image}source={{uri: fakerAvatarImg}} />
        </TouchableOpacity>
    )
  }
}

HeaderAvatar.propTypes = {
  userInfo: PropTypes.object
}

const styles = StyleSheet.create({
  imageWrapper: {
    marginLeft: 15
  },
  image: {
    height: avatar_size,
    width: avatar_size,
    borderRadius: avatar_radius,
    alignContent: 'flex-end'
  }
})

export default withApollo(connect((state) => ({info: state.user.info}), {logout})(connectActionSheet(HeaderAvatar)))
