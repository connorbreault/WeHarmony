import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function NotificationsButton(props) {
  const notifications = false;

  return (
    <View style={styles.container}>
      {notifications && (
        <Icon
          name="bell-ring-outline"
          backgroundColor={colors.primary}
          size={50}
        />
      )}
      {!notifications && (
        <Icon name="bell" backgroundColor={colors.medium} size={50} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default NotificationsButton;
