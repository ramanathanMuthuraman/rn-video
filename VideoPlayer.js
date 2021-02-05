import React, {useState, useRef} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Video from 'react-native-video';

const VideoPlayer = () => {
  const videoPlayerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [screenType, setScreenType] = useState('content');

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onBuffer = (meta) => {
    setIsLoading(meta.isBuffering);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => {
    setPaused(true);
  };

  return (
    <View style={{flex: 1}}>
      <Video
        controls={true}
        resizeMode={'cover'}
        onBuffer={onBuffer}
        onEnd={onEnd}
        paused={paused}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        ref={videoPlayerRef}
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }}
        style={{height: 225}}
        volume={10}></Video>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaPlayer: {
    height: 225,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});

export default VideoPlayer;
