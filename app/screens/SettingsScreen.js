import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

import Screen from "../components/Screen";
import AppText from "../components/Text";

import Icon from "../components/Icon";

function SettingsScreen({ navigation }) {
  return (
    <>
      <Screen style={styles.screen}>
        <View style={styles.headerContainer}>
          <AppText style={styles.header}>Settings</AppText>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <Icon
              name="window-close"
              backgroundColor={colors.primary}
              size={50}
            />
          </TouchableOpacity>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
    backgroundColor: colors.light,
  },
  header: {
    fontSize: 40,
    fontWeight: "600",
    fontStyle: "italic",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    fontSize: 35,
  },
});
export default SettingsScreen;
