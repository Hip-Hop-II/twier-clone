import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import {colors} from '../../utils/constants'
import {fakerAvatarImg} from '../../utils/constants'

const AVATAR_SIZE = 40
const AVATAR_RADIUS = AVATAR_SIZE / 2

export default class FeedCardHeader extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatarContent}>
          <Image 
            source={{uri: fakerAvatarImg}}
            style={styles.avatarImg}
          />
        </View>
        <View style={styles.metaContent}>
          <View style={styles.metaTopContent}>
            <Text style={styles.metaTopName}>
              xcxerxes
            </Text>
            <Text style={styles.metaTopText}>
              xcxerxes@gmail.com
            </Text>
          </View>
          <Text style={styles.metaBottomContent}>
            1 day ago
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContent: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  avatarImg: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_RADIUS
  },
  metaContent: {
    flex: 1,
    alignSelf: 'stretch'
  },
  metaTopContent: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center'
  },
  metaTopName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.SECONDARY,
    marginRight: 5
  },
  metaTopText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.LIGHT_GRAY
  },
  metaBottomContent: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 14,
    fontWeight: '600',
    color: colors.LIGHT_GRAY,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
})
