// Example of YouTube Video Integration in React Native
// https://aboutreact.com/youtube-video-integration-in-react-native/

// Import React
import React, {useState, useRef} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

// Import Youtube Players
import YouTube from 'react-native-youtube';

const YoutubePlayer = () => {
  const youtubePlayerRef = useRef();
  const singleVideoId = 'XsI9F3n-Bog';
  const listVideoIds = ['XsI9F3n-Bog'];

  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [containerMounted, setContainerMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(null);

  return (
    <View style={{flex: 1, height: 225}}>
      <View
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          if (!containerMounted) setContainerMounted(true);
          if (containerWidth !== width) setContainerWidth(width);
        }}>
        {containerMounted && (
          <YouTube
            ref={youtubePlayerRef}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyDWY5wB9ZXNJ6g5W7yjwuK5LpxIhvfPg5I"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            // videoId={singleVideoId}
            videoIds={listVideoIds}
            // playlistId="PLF797E961509B4EB5"
            play={isPlaying}
            loop={isLooping}
            fullscreen={fullscreen}
            controls={1}
            style={styles.player}
            onError={(e) => setError(e.error)}
            onReady={(e) => setIsReady(true)}
            onChangeState={(e) => setStatus(e.state)}
            onChangeQuality={(e) => setQuality(e.quality)}
            onChangeFullscreen={(e) => setFullscreen(e.isFullscreen)}
            onProgress={(e) => {
              setDuration(e.duration);
              setCurrentTime(e.currentTime);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default YoutubePlayer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  player: {
    height: 255,
  },
});
