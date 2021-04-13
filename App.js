/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import ReactNativeVideo from './VideoPlayer';
import ReactNativeVideoWithControls from './VideoPlayerWithControls';
import YoutubePlayer from './YoutubePlayer';
import YoutubePlayerIframe from './YoutubePlayerIframe';

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const closeVideoPopup = () => {
    setPlayVideo(false);
  };
  const renderVideo = (videoHeight) => {
    return (
      <YoutubePlayerIframe
        youtubePlayerProps={{
          videoId: 'JhX_iI42h34',
          height: 300,
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      {/* <ReactNativeVideo /> */}
      {/* <ReactNativeVideoWithControls /> */}
      {/* <YoutubePlayer /> */}
      {/* <YoutubePlayerIframe
        youtubePlayerProps={{
          videoId: 'JhX_iI42h34',
          height: 300,
        }}
      /> */}
      <Button
        title="Show video"
        onPress={() => {
          setPlayVideo(true);
        }}
      />

      <Modal
        testID="video-popup"
        isVisible={playVideo}
        onBackdropPress={closeVideoPopup}
        backdropColor="#ccc"
        backdropOpacity={0.8}
        coverScreen
        animationIn="zoomIn"
        animationOut="zoomOut">
        {renderVideo()}
      </Modal>
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
