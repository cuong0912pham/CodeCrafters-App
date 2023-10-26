import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigateCardType } from "../../types/navigations";
import { Box, Text } from "native-base";
import { STYLES } from "../../constansts/style";
import { useNavigation } from "@react-navigation/native";

const HomeCard = (props: NavigateCardType) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(props.navigateTo);
      }}
      style={[
        STYLES.primaryButton,
        {
          paddingHorizontal: 8,
          paddingVertical: 12,
          borderRadius: 8,
          marginVertical: 12,
        },
      ]}
    >
      <Box width={"100%"}>
        <Text>{props.title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
