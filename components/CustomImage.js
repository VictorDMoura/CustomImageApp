import React from "react";
import { Image, StyleSheet } from "react-native";

const CustomImage = ({ source, style, resizeMode }) => {
  return (
    <Image
      source={source}
      style={[styles.image, style]}
      resizeMode={resizeMode}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

export default CustomImage;
