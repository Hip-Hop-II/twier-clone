import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import MaterIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import BackButton from '../components/Buttons/BackButton'
import InputField from '../components/Form/InputField'
import {colors} from '../utils/constants'

class SignupScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })

  _signUpPress = () => {

  }
  render () {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.heading}>
          <BackButton
          buttonPress={() => this.props.navigation.goBack()} 
            icons={
              <MaterIcon 
              size={30}
              name="arrow-back"
              color={colors.PRIMARY}
              />
            }
          />
          <View style={styles.headerTitle}>
            <FontAwesomeIcon
              name="twitter"
              size={30}
              color={colors.PRIMARY}
              />
          </View>
        </View>
        <View style={{position: 'absolute', top: '25%', left: 0, right: 0, bottom: 0}}>

        
        <ScrollView style={styles.scrollView}>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Full name"
              borderBottomColor={colors.LIGHT_GRAY}
              />
              />
            </View>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Email"
              borderBottomColor={colors.LIGHT_GRAY}
              />
              />
            </View>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Password"
              borderBottomColor={colors.LIGHT_GRAY}
              />
              />
            </View>
            <View style={styles.wrapperItem}>
              <InputField
              placeholder="Username"
              borderBottomColor={colors.LIGHT_GRAY}
              />
            </View>
            <TouchableHighlight style={styles.bottomButton} onPress={this._signUpPress}>
                <Text style={styles.bottomButtonText}>Sign up</Text>
            </TouchableHighlight>
        </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50
  },
  heading: {
    paddingLeft: 10,
    flexDirection: 'row'
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingTop: 40
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
    marginBottom: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  bottomButton: {
    marginTop: 50,
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 20
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.WHITE
  }
})

export default SignupScreen
