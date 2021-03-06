import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import PostCard from "../components/posts/PostCard";
import colors from "../config/colors";
import postsApi from "../api/eventPosts";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";
import PostCreator from "../components/posts/PostCreator";
import TopBar from "../components/TopBar";

function EventScreen({ navigation }) {
  const getEventPostsApi = useApi(postsApi.getEventPosts);

  useEffect(() => {
    getEventPostsApi.request();
  }, []);

  const onLikePress = () => {
    console.log("Like");
  };
  const onCommentPress = () => {
    console.log("Comment");
  };

  return (
    <>
      <ActivityIndicator visible={getEventPostsApi.loading} />
      <Screen style={styles.screen}>
        {getEventPostsApi.error && (
          <>
            <AppText>Couldn't retrieve the posts..</AppText>
            <Button title="Retry" onPress={getEventPostsApi.loading} />
          </>
        )}
        <TopBar />
        <PostCreator placeholder="Write a post" Type="Event" />
        <FlatList
          data={getEventPostsApi.data}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => (
            <PostCard
              post={item.post}
              imageUrl={item.profilePic}
              authorId={item.authorId}
              authorName={item.authorName}
              comments={item.comments}
              likes={item.likes}
              onLikePress={onLikePress}
              onCommentPress={onCommentPress}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
    backgroundColor: colors.light,
  },
});

export default EventScreen;
