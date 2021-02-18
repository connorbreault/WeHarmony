import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WantedScreen from "../screens/WantedScreen";

const Stack = createStackNavigator();

const WantedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Wanted" component={WantedScreen} />
  </Stack.Navigator>
);

export default WantedNavigator;
