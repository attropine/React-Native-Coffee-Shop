import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function DetailScreen({ route, navigation }: any) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="#000" />
      </TouchableOpacity>

      <Image source={item.image} style={styles.image} />

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <Text style={styles.price}>{item.price} грн</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 10,
  },

  image: {
    width: "100%",
    height: 260,
    borderRadius: 20,
    marginBottom: 25,
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    opacity: 0.7,
    lineHeight: 20,
    marginBottom: 20,
  },

  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#8b5e3b",
  },
});
