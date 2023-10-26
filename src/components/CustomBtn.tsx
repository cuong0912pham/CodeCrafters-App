import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, IBoxProps, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  size?: "MD" | "XS" | "SM";
  text: string;
  handleBtn: () => void;
  disabled?: boolean;
} & IBoxProps;

const CustomBtn = (props: Props) => {
  const { text, size, handleBtn, disabled = false, ...boxProps } = props;
  let width, height, fontSize;
  // if (size == "MD") {
  //   width = 220;
  //   height = 40;
  //   fontSize = 16;
  // } else if (size == "XS") {
  //   width = 160;
  //   height = 32;
  //   fontSize = 14;
  // } else if (size == "SM") {
  //   width = 110;
  //   height = 40;
  //   fontSize = 16;
  // } else {
  //   height = 32;
  // }
  return (
    <TouchableOpacity onPress={handleBtn} disabled={disabled}>
      <Box shadow={2} {...boxProps}>
        <LinearGradient
          // Button Linear Gradient
          colors={disabled ? ["#fff", "#cecece"] : ["#79FBFD", "#57B7E6"]}
          style={styles.gradientColor}
        >
          <Text fontSize={16} color="text.100" fontWeight={"bold"}>
            {text}
          </Text>
        </LinearGradient>
      </Box>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 100,
    padding: 1,
    backgroundColor: "#fff",
  },
  gradientColor: {
    borderRadius: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
