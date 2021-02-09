// Example of YouTube Video Integration in React Native
// https://aboutreact.com/youtube-video-integration-in-react-native/

// Import React
import React, {useState, useCallback, useEffect} from 'react';
// Import required components
import {View} from 'react-native';
import axios from 'axios';

// Import Youtube Players
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubePlayerIframe = (props) => {
  const [isYoutubeAccessible, setIsYoutubeAccessible] = useState(true);
  const {youtubePlayerProps} = props;
  useEffect(() => {
    axios
      .get('https://youtube.com/favicon.ico')
      .then(() => {
        console.log('success');
        setIsYoutubeAccessible(true);
      })
      .catch(() => {
        console.log('error');
        setIsYoutubeAccessible(false);
      });
  }, []);

  return (
    <View>
      {isYoutubeAccessible && <YoutubePlayer {...youtubePlayerProps} />}
    </View>
  );
};

export default YoutubePlayerIframe;
