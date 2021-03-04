import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/Text";

function SettingsScreen(props) {
  return (
    <Screen>
      <ScrollView>
        <AppText>Settings</AppText>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default SettingsScreen;
