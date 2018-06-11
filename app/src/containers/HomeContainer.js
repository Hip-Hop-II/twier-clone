import React, { Component  } from "react"
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  StyleSheet
} from 'react-native'
import {graphql, compose, withApollo} from 'react-apollo'
import GET_TWEETS_QUERY from '../graphql/queries/getTweets'
import ME_QUERY from '../graphql/queries/me'
import {connect} from 'react-redux'
import {getUserInfo} from '../actions/user'

import {colors} from '../utils/constants'
import FeedCard from '../components/FeedCard/FeedCard'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderAvatar from '../components/HeaderAvatar'

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
  state = {
    userInfo: {}
  }
  componentDidMount () {
    this._getUserInfo()
  }
  _getUserInfo = async () => {
    try {
      const {data: {me}} = await this.props.client.query({query: ME_QUERY})
      me && this.setState({userInfo: me})
    } catch (error) {
      throw error
    }
    
  }
  _renderItem = ({item}) => <FeedCard {...item} />
  render () {
    const { data } = this.props
    console.log(this.props.data)
    console.log('========Porps')
    if (data.loading) {
      return (
        <View style={styles.homeWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <HeaderAvatar title="首页" headerLeft userInfo={this.state.userInfo} />
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeWrapper: {
    flex: 1,
    paddingTop: 5,
    marginTop: 80,
    backgroundColor: '#f2f2f2'
  }
})

export default withApollo(compose(
  connect(undefined, {getUserInfo}),
  graphql(GET_TWEETS_QUERY)
)(HomeContainer))

