import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CoffeeItem from "../components/CoffeeItem";
import { coffees } from "../data/coffees";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/promo.png")}
        style={styles.promo}
      />

      <Text style={styles.title}>All Coffee</Text>

      <FlatList
        data={coffees}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CoffeeItem
            item={item}
            onPress={() => navigation.navigate("Detail", { item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 15 },
  promo: {
    width: "100%",
    height: 140,
    borderRadius: 20,
    marginBottom: 20,
  },
});
