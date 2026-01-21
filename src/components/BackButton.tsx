import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BackButton({ onPress }: any) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Image
        source={require("../../assets/images/back.png")}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
});
