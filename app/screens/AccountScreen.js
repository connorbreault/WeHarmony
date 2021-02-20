import React, { useState, useCallback } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";
import AppText from "../components/Text";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";
import TopBar from "../components/TopBar";
import { UserInterfaceIdiom } from "expo-constants";
import { useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import UserVideo from "../components/UserVideo";

function AccountScreen({ navigation }) {
  useEffect(() => {
    console.log(user);
  });
  const { user, logOut } = useAuth();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <Screen style={styles.screen}>
      <TopBar />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.user}>
            <Image
              source={require("../assets/profilePic.jpeg")}
              style={styles.userPic}
            />
            <View style={styles.userNameContainer}>
              <AppText style={styles.userName}>{user.name}</AppText>
              <AppText style={styles.userLocation}>{user.location}</AppText>
            </View>
          </View>
          <Button
            title="Edit Profile"
            onPress={() => console.log("edit profile")}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.videoHeaderContainer}>
            <Text style={styles.videoHeader}>Your Videos</Text>
            <TouchableOpacity onPress={() => console.log("edit videos")}>
              <Icon FAname="cog" backgroundColor={colors.primary} />
            </TouchableOpacity>
          </View>
          {user.links.map((item) => {
            return <UserVideo key={item.id} videoId={item.link} />;
          })}
        </View>

        <View style={styles.container}>
          <ListItem
            title="Log Out"
            IconComponent={
              <Icon name="logout" backgroundColor={colors.primary} />
            }
            onPress={() => logOut()}
          />
          <ListItem
            title="Settings"
            IconComponent={
              <Icon FAname="cog" backgroundColor={colors.medium} />
            }
            onPress={() => console.log("settings")}
          />
          <ListItem
            title="About Us"
            IconComponent={
              <Icon name="music-note" backgroundColor={colors.dark} />
            }
            onPress={() => console.log("about")}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
    backgroundColor: colors.light,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  userLocation: {
    fontSize: 20,
  },
  userName: {
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "500",
  },
  userNameContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  userPic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  videoHeader: {
    fontSize: 35,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "500",
    color: colors.medium,
  },
  videoHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default AccountScreen;
