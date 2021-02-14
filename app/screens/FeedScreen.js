import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, Platform } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import PostCard from "../components/posts/PostCard";
import colors from "../config/colors";
import postsApi from "../api/feedPosts";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";
import PostCreator from "../components/posts/PostCreator";
import TopBar from "../components/TopBar";

function FeedScreen({ navigation }) {
  const getFeedPostsApi = useApi(postsApi.getFeedPosts);

  useEffect(() => {
    getFeedPostsApi.request();
  }, []);

  const onLikePress = () => {
    console.log("Like");
  };

  return (
    <>
      <ActivityIndicator visible={getFeedPostsApi.loading} />
      <Screen style={styles.screen}>
        {getFeedPostsApi.error && (
          <>
            <AppText>Couldn't retrieve the posts..</AppText>
            <Button title="Retry" onPress={getFeedPostsApi.loading} />
          </>
        )}
        <TopBar />
        <PostCreator placeholder="Write a post" Type="Feed" />
        <FlatList
          data={getFeedPostsApi.data}
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
              onCommentPress={() => console.log(item)}
              // onCommentPress={() => navigation.navigate(routes.COMMENTS, item)}
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

export default FeedScreen;
