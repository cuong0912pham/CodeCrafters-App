import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Box, Column, ScrollView, VStack } from "native-base";
import CardList from "../components/Main/CardList";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { createLessons, lessons } from "../constansts/items";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";
type Props = {} & NativeStackScreenProps<RootStackParams, "Lesson">;
const Lesson = (props: Props) => {
  return (
    <MainBackground>
      <Box position={"fixed"} top={0}>
        <HomeHeader title="Bài học" />
      </Box>
      <VStack px={4} flex={1}>
        <CardList data={lessons} />
      </VStack>
    </MainBackground>
  );
};

export default Lesson;

const styles = StyleSheet.create({});
