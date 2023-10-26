import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Box, Image, VStack } from "native-base";
import MainBackground from "../components/HomeTab/MainBackground";
import CustomBtn from "../components/CustomBtn";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams, "Home">;

const Home = (props: Props) => {
  const { navigation } = props;
  return (
    <MainBackground>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          source={require("../../assets/logo.png")}
          alt="LOGO"
          resizeMode="contain"
          h={40}
        />
        <VStack width={"60%"} mt={12} space={4}>
          <CustomBtn
            text={"Bài học"}
            handleBtn={() => navigation.navigate("Lesson")}
            height={10}
          />
          <CustomBtn
            text={"Giải đố"}
            handleBtn={() => navigation.navigate("Quiz")}
            height={10}
          />
          <CustomBtn
            text={"Trò chơi xếp hình"}
            handleBtn={() => navigation.navigate("Game")}
            height={10}
          />
        </VStack>
      </Box>
    </MainBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
