// Example of YouTube Video Integration in React Native
// https://aboutreact.com/youtube-video-integration-in-react-native/

// Import React
import React, {useState, useCallback} from 'react';
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
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubePlayerIframe = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={{flex: 1, height: 225}}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'XsI9F3n-Bog'}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default YoutubePlayerIframe;
