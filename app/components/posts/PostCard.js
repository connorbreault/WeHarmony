import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../Text";
import colors from "../../config/colors";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "../Icon";
// import { Image } from "react-native-expo-image-cache";

function PostCard({
  post,
  authorName,
  comments,
  likes,
  imageUrl,
  onLikePress,
  onCommentPress,
}) {
  const [ifLiked, setifLiked] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.userContainer}>
        <Image
          style={styles.image}
          tint="light"
          source={require("../../assets/mosh.jpg")}
        />
        <Text style={styles.text}>{authorName}</Text>
      </View>
      <Text style={styles.text}>{post}</Text>
      <View style={styles.socialButtonContainer}>
        <View style={styles.socialButton}>
          <TouchableOpacity onPress={onLikePress}>
            {ifLiked && (
              <Icon name="thumb-up-outline" backgroundColor={colors.primary} />
            )}
            {!ifLiked && (
              <Icon name="thumb-up-outline" backgroundColor={colors.medium} />
            )}
          </TouchableOpacity>
          {likes && <Text style={styles.counter}>{likes.length}</Text>}
        </View>
        <View style={styles.socialButton}>
          {comments && <Text style={styles.counter}>{comments.length}</Text>}
          <TouchableOpacity onPress={onCommentPress}>
            <Icon name="comment" backgroundColor={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    flexDirection: "row",
  },
  counter: {
    padding: 10,
  },
  text: {
    flex: 1,
    padding: 15,
    flexWrap: "wrap",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PostCard;
