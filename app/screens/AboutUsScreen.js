import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/Text";

function AboutUsScreen(props) {
  return (
    <Screen>
      <ScrollView>
        <AppText>About Us</AppText>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AboutUsScreen;
