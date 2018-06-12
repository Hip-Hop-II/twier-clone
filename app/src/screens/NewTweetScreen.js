import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  StyleSheet
} from 'react-native'

import {connect} from 'react-redux'
import {graphql, compose} from 'react-apollo'
import MUTATION_CREATETWEET from '../graphql/mutations/createTweet'
import QUERY_GETTWEETS from '../graphql/queries/getTweets'

import HeaderAvatar from '../components/HeaderAvatar'
import ButtonHeader from '../components/Buttons/ButtonHeader'
import InputField from '../components/Form/InputField'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {colors, fakerAvatarImg} from '../utils/constants'

class NewTweetScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      <HeaderAvatar />
    ),
    headerRight: (
      <ButtonHeader 
        icons={<MaterialIcons
          size={24}
          name="close"
          color={colors.PRIMARY}
        />}
        buttonStyle={{marginRight: 15}}
        buttonPress={() => navigation.goBack(null)}
      />
    )
  })
  state = {
    text: ''
  }
  get _textLength () {
    return 140 - this.state.text.length
  }
  _onChangeText = (text) => {
    this.setState({text})
  }
  _send = async () => {
    try {
      const {user = {}} = this.props
      await this.props.mutate({
        variables: {
          text: this.state.text
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createTweet: {
            __typename: 'Tweet',
            text: this.state.text,
            favoriteCount: 0,
            _id: Math.round(Math.random() * -1000000),
            createdAt: new Date(),
            user: {
              __typename: 'User',
              username: 'xcxerxes',
              firstName: 'Antony',
              lastName: 'xia',
              avatar: fakerAvatarImg
            }
          }
        },
        update: (store, {data: {createTweet}}) => {
          const data = store.readQuery({query: QUERY_GETTWEETS})
          if (!data.getTweets.find(t => t._id === createTweet._id)) {
            store.writeQuery({query: QUERY_GETTWEETS, data: {getTweets: [{...createTweet}, ...data.getTweets]}})
          }
        }
      })
      Keyboard.dismiss()
      this.props.navigation.goBack()
    } catch (error) {
      throw error
    }
  }
  get _buttonDisabled () {
    return this.state.text.length < 5
  }
  render() {
    return (
      <View style={styles.wrapper} >
        <View style={styles.wrapperContainer}>
          <InputField 
            multiline={true}
            maxLength={140}
            autoFocus={true}
            placeholder="What's happening?"
            borderBottomColor='transparent'
            selectionColor={Platform.OS === 'ios' && colors.PRIMARY}
            onChangeText={this._onChangeText}
            inputStyle={{height: '40%', textAlign: 'left', textAlignVertical: 'top'}}
          />
        <Text style={styles.textLength}>
          {this._textLength}
        </Text>
        <View style={styles.tweetButtonWrapper}>
          <TouchableHighlight style={styles.tweetButton} onPress={this._send}
            disabled={this._buttonDisabled}
            underlayColor={colors.LIGHT_PRIMARY}  
            activeOpacity={.8}
          >
            <Text style={styles.tweetButtonText}>发表</Text>
          </TouchableHighlight>
        </View>
          {/* <ScrollView style={styles.scrollView}>
          </ScrollView> */}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  wrapperContainer: {
    height: '80%',
    width: '90%',
    paddingTop: 5,
    alignSelf: 'center'
  },
  scrollView: {
    flex: 1
  },
  textLength: {
    fontSize: 18,
    color: colors.PRIMARY,
    position: 'absolute',
    top: '45%',
    right: '5%'
  },
  tweetButtonWrapper: {
    position: 'absolute',
    top: '55%',
    right: 0
  },
  tweetButton: {
    width: 80,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.PRIMARY,
    borderRadius: 20
  },
  tweetButtonText: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: '600',
  }
})
export default compose(
  graphql(MUTATION_CREATETWEET),
  connect(state => ({user: state.user.info}))
)(NewTweetScreen)
