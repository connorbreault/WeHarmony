import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

function Icon({
  name,
  FAname,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  onPress,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {name && (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
      {FAname && (
        <FontAwesome5 name={FAname} color={iconColor} size={size * 0.5} />
      )}
    </View>
  );
}

export default Icon;
