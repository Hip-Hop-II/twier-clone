import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native'
import MaterIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import ButtonHeader from '../components/Buttons/ButtonHeader'
import InputField from '../components/Form/InputField'
import Loading from '../components/Loading'
import {colors, fakerAvatarImg} from '../utils/constants'

import {graphql, compose} from 'react-apollo'
import SIGNUP_MUTATION from '../graphql/mutations/signup'
import {connect} from 'react-redux'
import {login} from '../actions/user'

const avatar = fakerAvatarImg

class SignupScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  state = {
    fullName: '',
    email: '',
    password: '',
    username: '',
    loading: false
  }
  _validateForm = () => {
    const {fullName, email, password, username} = this.state
    if (fullName && email && password && username) {
      return false
    }
    return true
  }

  _signUpPress = async () => {
    try {
      this.setState({loading: true})
      const {fullName, email, password, username} = this.state
      const {data} = await this.props.mutate({
        variables: {
          fullName,
          email,
          password,
          username,
          avatar: fakerAvatarImg
        }
      })
      await AsyncStorage.setItem('@twitteryoutubeclone', data.signup.token)
      this.setState({loading: false})
      return this.props.navigation.replace('Home')
    } catch (error) {
      this.setState({loading: false})
      throw error
    }

  }
  render () {
    if (this.state.loading) {
      return (
        <Loading />
      )
    }
    const {fullName, email, password, username} = this.state
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.heading}>
          <ButtonHeader
          buttonPress={() => this.props.navigation.goBack()} 
            icons={
              <MaterIcon 
              size={30}
              name="arrow-back"
              color={colors.PRIMARY}
              />
            }
            buttonStyle={{paddingLeft: 10}}
          />
          <View style={styles.headerTitle}>
            <FontAwesomeIcon
              name="twitter"
              size={30}
              color={colors.PRIMARY}
              />
          </View>
        </View>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Full name"
              value={fullName}
              onChangeText={(value) => this.setState({fullName: value})}
              />
            </View>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => this.setState({email: value})}
              />
            </View>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Password"
              value={password}
              type="password"
              onChangeText={(value) => this.setState({password: value})}
              />
            </View>
            <View style={[styles.wrapperItem, {marginBottom: 20}]}>
              <InputField
              value={username}
              placeholder="Username"
              onChangeText={(value) => this.setState({username: value})}
              />
            </View>
            <View style={styles.bottomButtonWrapper}>
              <TouchableHighlight style={[styles.bottomButton, {backgroundColor: this._validateForm() ? colors.LIGHT_PRIMARY : colors.PRIMARY}]} 
                onPress={this._signUpPress} 
                underlayColor={colors.LIGHT_PRIMARY}  
                activeOpacity={.8} 
                disabled={this._validateForm()}>
                  <Text style={styles.bottomButtonText} >SignUp</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  heading: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewWrapper: {
    flex:1,
    marginTop: 100
  },
  scrollView: {
   
  },
  container: {
    width: '70%'
  },
  textInput: {
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  wrapperItem: {
    width: '70%',
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  bottomButtonWrapper: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 20
  },
  bottomButtonText: {
    width: '100%',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.WHITE
  }
})

export default compose(
  graphql(SIGNUP_MUTATION),
  connect(undefined, {login})
)(SignupScreen)
