import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../screens/FeedScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Feed" component={FeedScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
