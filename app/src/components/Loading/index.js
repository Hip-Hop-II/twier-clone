import React from 'react'
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native'

import {colors} from '../../utils/constants'

export default function Loading ({color, size = 'large'} = {}) {
  return (
    <ActivityIndicator 
      size={size}
      color={color}
      style={styles.loading}
    />
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
