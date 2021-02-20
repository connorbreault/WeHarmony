import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import LottieView from "lottie-react-native";

function UserVideo(props) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <>
      <View style={styles.lottie}>
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/loader.json")}
        />
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={props.videoId}
          onChangeState={onStateChange}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lottie: {
    backgroundColor: "white",
    width: "100%",
    zIndex: 1,
  },
});
export default UserVideo;
