import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.bottom}>
        <Text style={styles.title}>
          Fall in Love with Coffe in Blissful Delight!
        </Text>
        <Text style={styles.subtitle}>
          Welcome to our cozy coffe corner, where every cup is a delightful for
          you.
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "flex-end" },
  bottom: { padding: 30, backgroundColor: "rgba(0,0,0,0.4)" },
  title: { color: "#fff", fontSize: 32, fontWeight: "700" },
  subtitle: { color: "#a5a5a5ff", marginTop: 10, fontSize: 16 },
  btn: {
    marginTop: 25,
    backgroundColor: "#A47C5B",
    paddingVertical: 14,
    borderRadius: 12,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
