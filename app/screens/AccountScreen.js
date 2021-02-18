import React from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";

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

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <TopBar />
      <View style={styles.userContainer}>
        <View style={styles.container}>
          <Image
            source={require("../assets/profilePic.jpeg")}
            style={styles.image}
          />
          <View style={styles.profileName}>
            <AppText>{user.name}</AppText>
            <AppText>{user.email}</AppText>
          </View>
        </View>
        <Button
          title="Edit Profile"
          onPress={() => console.log("edit profile")}
        />
      </View>
      <Text>{user.links}</Text>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.primary} />}
        onPress={() => logOut()}
      />
      <ListItem
        title="Settings"
        IconComponent={<Icon FAname="cog" backgroundColor={colors.medium} />}
        onPress={() => console.log("settings")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
    backgroundColor: colors.light,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  userContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 30,
    marginVertical: 20,
  },
  profileName: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountScreen;
