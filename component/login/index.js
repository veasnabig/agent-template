import React, { Component } from 'react';
import {
  View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
  TouchableHighlight, Dimensions, ImageBackground
} from 'react-native';

import LoginPage from './LoginPage.js';

// keyboard
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};


const window = Dimensions.get('window');
const width = window.width;
const height = window.height;

import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from '../../assets/wbLogo.png';
import blurBg from '../../assets/blurBg.png';
// import bg from './assets/bg.png';
import { Ionicons } from '@expo/vector-icons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount() {
    if (Platform.OS == 'ios') {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    } else {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  _handleIndexChange = index => this.setState({ index });


  // keyboard scroll
  _scrollToInput(reactNode) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ flex: 1, width: null, height: null }}
          source={blurBg}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
            <Text style={styles.loginLabel}>ចូលប្រើ</Text>
            <LoginPage />
          </View>
        </ImageBackground>
      </View>
    );
  }
};
export default Login;