import React, { Component  } from "react"
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  StyleSheet
} from 'react-native'
import {graphql} from 'react-apollo'
import GET_TWEETS_QUERY from '../graphql/queries//getTweets'

import {colors} from '../utils/constants'
import FeedCard from '../components/FeedCard/FeedCard'
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeContainer extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({tintColor}) => (
      <Icon
        size={24}
        name='home'
        color={tintColor}
      />
    )
  })
  _renderItem = ({item}) => <FeedCard {...item} />
  render () {
    const { data } = this.props
    console.log(this.props)
    if (data.loading) {
      return (
        <View style={styles.homeWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.homeWrapper}>
        <ScrollView>
          <FlatList 
            contentContainerStyle={{alignSelf: 'stretch'}}
            data={data.getTweets}
            keyExtractor={item => item._id}
            renderItem={this._renderItem}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#f2f2f2'
  }
})

export default graphql(GET_TWEETS_QUERY)(HomeContainer)
