import React from "react";
import { Alert, View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AppText from "./Text";

function LocationItem(props) {
  const _handlePress = async () => {
    const res = await props.fetchDetails(props.place_id);
    console.log(res);
    return JSON.stringify(res);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={_handlePress}>
      <AppText>{props.description}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
  },
});
export default LocationItem;
