import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import Lesson from "../screens/Lesson";
import Quizz from "../screens/Quizz";
import GameScreen from "../screens/GameScreen";
import AnswerQuizz from "../screens/Quizz/AnswerQuizz";
import Puzzle from "../screens/Puzzle";
import LessonVideo from "../screens/LessonVideo";
import Home from "../screens/Home";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  return (
    <>
      <LoadingOverlay />
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Quiz" component={Quizz} />
          <Stack.Screen name="AnswerQuizz" component={AnswerQuizz} />
          <Stack.Screen name="Puzzle" component={Puzzle} />
          <Stack.Screen name="LessonVideo" component={LessonVideo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Root;
