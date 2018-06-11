import React, { Component } from "react"
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native'
import { graphql, compose, withApollo } from 'react-apollo'
import GET_TWEETS_QUERY from '../graphql/queries/getTweets'
import ME_QUERY from '../graphql/queries/me'
import { connect } from 'react-redux'
import { getUserInfo } from '../actions/user'

import { colors } from '../utils/constants'
import FeedCard from '../components/FeedCard/FeedCard'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderAvatar from '../components/HeaderAvatar'
import ButtonHeader from '../components/Buttons/ButtonHeader'

class HomeContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon
        size={24}
        name='home'
        color={tintColor}
      />
    ),
    headerTitle: '首页',
    headerLeft: (
      <HeaderAvatar />
    ),
    headerRight: (
      <ButtonHeader buttonStyle={{ marginRight: 15 }}
        buttonPress={() => navigation.navigate('NewTweet')}
        icons={
          <Icon name="pencil" size={20} color={colors.PRIMARY} />
        }
      />
    ),
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    }
  })
  componentDidMount() {
    this._getUserInfo()
  }
  _sendPress = () => {
    alert('cc')
  }
  _getUserInfo = async () => {
    try {
      const { data: { me } } = await this.props.client.query({ query: ME_QUERY })
      console.log('========================================me', me)
      this.props.getUserInfo(me)
    } catch (error) {
      throw error
    }

  }
  _renderItem = ({ item }) => <FeedCard {...item} />
  render() {
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
        <View style={styles.headerWrapper}>
          <HeaderAvatar />
          <Text style={styles.headerTitle}>首页</Text>
          <ButtonHeader buttonStyle={{ marginRight: 15 }}
            buttonPress={() => this.props.navigation.navigate('NewTweet')}
            icons={
              <Icon name="pencil" size={20} color={colors.PRIMARY} />
            }
          />
        </View>
        {/* <HeaderAvatar title="首页" headerLeft userInfo={this.state.userInfo} 
          headerRight={
            <ButtonHeader buttonStyle={{marginRight: 15}}
            buttonPress={() => this._sendPress()}
              icons={
                <Icon name="pencil" size={20} color={colors.PRIMARY} />
              }
            />
          }
        /> */}
        <View style={styles.homeWrapper}>
          <ScrollView>
            <FlatList
              contentContainerStyle={{ alignSelf: 'stretch' }}
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
    flex: 1,
    marginTop: 20
  },
  headerWrapper: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT_GRAY,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  homeWrapper: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#f2f2f2'
  }
})

export default withApollo(compose(
  connect(undefined, { getUserInfo }),
  graphql(GET_TWEETS_QUERY)
)(HomeContainer))
