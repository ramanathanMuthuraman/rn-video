/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ReactNativeVideo from './VideoPlayer';
import ReactNativeVideoWithControls from './VideoPlayerWithControls';
import YoutubePlayer from './YoutubePlayer';
import YoutubePlayerIframe from './YoutubePlayerIframe';

const App = () => {
  return (
    <SafeAreaView>
      <ReactNativeVideo />
      {/* <ReactNativeVideoWithControls />
      <YoutubePlayer />
      <YoutubePlayerIframe /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
