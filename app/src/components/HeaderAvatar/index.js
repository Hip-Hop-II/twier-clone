import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
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

      })
  }
  render() {
    const {headerLeft, title, userInfo, avatarOnPress} = this.props
    return (
      <View style={styles.wrapper}>
        {headerLeft ? 
        <TouchableOpacity style={styles.imageWrapper} disabled={!userInfo.avatar} onPress={this._avatarOnpress}>
          {userInfo.avatar ? <Image style={styles.image}source={{uri: userInfo.avatar}} /> : <Loading size="small" /> }
        </TouchableOpacity> : null}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    )
  }
}

HeaderAvatar.propTypes = {
  headerLeft: PropTypes.bool,
  title: PropTypes.string,
  userInfo: PropTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    height: 80,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
    borderBottomColor: colors.LIGHT_GRAY
  },
  imageWrapper: {
    marginLeft: 15,
    height: avatar_size,
    width: avatar_size,
  },
  image: {
    height: avatar_size,
    width: avatar_size,
    borderRadius: avatar_radius
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  }
})

export default connect(undefined, {logout})(connectActionSheet(HeaderAvatar))
