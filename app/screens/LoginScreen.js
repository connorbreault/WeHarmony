import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import Button from "../components/Button";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };

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
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password"
            visible={loginFailed}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
          <Button
            title="Back"
            color="medium"
            onPress={() => navigation.navigate("Welcome")}
          />
        </Form>
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
    width: 175,
    height: 175,
    opacity: 0.85,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    color: colors.white,
    textShadowColor: colors.primary,
    textShadowRadius: 20,
    fontSize: 35,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default LoginScreen;
