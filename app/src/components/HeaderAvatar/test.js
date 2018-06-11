import React, { Component } from 'react'
import {
  View,
  Text,
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
    const {headerLeft, title, userInfo, avatarOnPress, headerRight} = this.props
    return (
      <View style={styles.wrapper}>
        {headerLeft ? 
        <TouchableOpacity style={styles.imageWrapper} disabled={userInfo.avatar} onPress={this._avatarOnpress}>
          {!userInfo.avatar ? <Image style={styles.image}source={{uri: fakerAvatarImg}} /> : <Loading size="small" /> }
        </TouchableOpacity> : null}
        <Text style={styles.titleText}>{title}</Text>
        {headerRight}
      </View>
    )
  }
}

HeaderAvatar.propTypes = {
  headerLeft: PropTypes.bool,
  title: PropTypes.string,
  userInfo: PropTypes.object,
  headerRight: PropTypes.element
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    marginTop: 25,
    height: 50,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.LIGHT_GRAY
  },
  imageWrapper: {
    marginLeft: 15
  },
  image: {
    height: avatar_size,
    width: avatar_size,
    borderRadius: avatar_radius,
    alignContent: 'flex-end'
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  }
})

export default withApollo(connect(undefined, {logout})(connectActionSheet(HeaderAvatar)))
