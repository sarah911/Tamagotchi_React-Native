/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import ImageSequence from 'react-native-image-sequence';
import { Platform } from 'react-native'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import jake from "./slime_default_1.png";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const images = [
  require('./slime_default_1.png'),
  require('./slime_default_2.png'),
];

const centerIndex = Math.round(images.length / 2);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageSequence
          images={images}
          startFrameIndex={centerIndex}
          loop={true}
          framesPerSecond={3}
          style={{width: 300, height: 300}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 64,
    paddingBottom: 32
  }
});