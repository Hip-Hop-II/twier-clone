import React, { Component  } from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import FeedCard from '../components/FeedCard/FeedCard'

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.homeWrapper}>
        <ScrollView>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f2f2f2'
  }
})