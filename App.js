import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomImage from "./components/CustomImage";
import localImage1 from "./assets/local-image-1.jpg";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagens</Text>
      <CustomImage source={localImage1} resizeMode="cover" />
      <CustomImage
        source={require("./assets/local-image-2.jpg")}
        resizeMode="contain"
        style={styles.customStyle}
      />
      <CustomImage
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/heymyapp.appspot.com/o/man-1352025_640.png?alt=media&token=0b924d68-d525-4959-919f-67e7d1f009e0",
        }}
        resizeMode="stretch"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  customStyle: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "red",
  },
});
