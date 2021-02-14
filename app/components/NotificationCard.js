import React from "react";
import { View, Image, StyleSheet, Text, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../config/colors";

function NotificationCard({ userName, notification, time, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        tint="light"
        source={require("../assets/mosh.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.notification}>
          <Text style={styles.userName}>{userName}</Text> {notification}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.light,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  notification: {
    fontSize: 20,
    flexWrap: "wrap",
    paddingHorizontal: 10,
    fontWeight: "500",
  },
  time: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  userName: {
    color: colors.primary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontStyle: "italic",
    fontWeight: "700",
  },
});
export default NotificationCard;
