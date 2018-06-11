import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from 'react-native'

import HeaderAvatar from '../components/HeaderAvatar'
import ButtonHeader from '../components/Buttons/ButtonHeader'
import InputField from '../components/Form/InputField'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {colors} from '../utils/constants'

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
  _send = () => {

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
export default NewTweetScreen
