import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsScreen from "../screens/EventsScreen";

const Stack = createStackNavigator();

const EventNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Event" component={EventsScreen} />
  </Stack.Navigator>
);

export default EventNavigator;
