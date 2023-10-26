import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Box, Center, Column, HStack, Heading, Row } from "native-base";
import { STYLES, colors } from "../../constansts/style";
import { ArrowLeft2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

export interface HomeHeaderProps {
  title: string;
}

const HomeHeader = (props: HomeHeaderProps) => {
  const navigation = useNavigation();
  return (
    <Column bgColor={colors.blurBackground} mb={4} safeAreaTop pb={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"} px={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="32" color="white" />
        </TouchableOpacity>
        <Center>
          <Heading
            color={"#fff"}
            fontSize={20}
            bold
            textTransform={"uppercase"}
          >
            {props.title}
          </Heading>
        </Center>
        <Box size={8} />
      </HStack>
    </Column>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
