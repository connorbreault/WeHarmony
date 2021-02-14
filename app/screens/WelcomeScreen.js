import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-orange.png")}
        />
        <Text style={styles.tagline}>WeHarmony</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          color="medium"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 180,
    height: 180,
    opacity: 0.85,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    color: colors.white,
    textShadowColor: colors.primary,
    textShadowRadius: 20,
    fontSize: 45,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
