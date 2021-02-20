import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "./Icon";

function MessagesButton(props) {
  const [newMessage, setNewMessage] = useState(true);

  return (
    <View style={styles.container}>
      {newMessage && (
        <TouchableOpacity
          onPress={() => {
            setNewMessage(false);
          }}
        >
          <Icon
            name="message-alert-outline"
            backgroundColor={colors.primary}
            size={50}
          />
        </TouchableOpacity>
      )}
      {!newMessage && (
        <Icon name="message" backgroundColor={colors.medium} size={50} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default MessagesButton;
