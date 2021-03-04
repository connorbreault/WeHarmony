import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="AboutUs" component={AboutUsScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
