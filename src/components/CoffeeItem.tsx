import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CoffeeItem({ item, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} euro</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 15,
  },
  image: {
    width: "100%",
    height: 110,
    borderRadius: 12,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: "#A47C5B",
    fontWeight: "bold",
  },
});
