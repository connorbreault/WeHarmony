import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "./Icon";

function NotificationsButton(props) {
  const [newNotification, setNewNotification] = useState(true);

  return (
    <View style={styles.container}>
      {newNotification && (
        <TouchableOpacity
          onPress={() => {
            setNewNotification(false);
          }}
        >
          <Icon
            name="bell-ring-outline"
            backgroundColor={colors.primary}
            size={50}
          />
        </TouchableOpacity>
      )}
      {!newNotification && (
        <Icon name="bell" backgroundColor={colors.medium} size={50} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default NotificationsButton;
