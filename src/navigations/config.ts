import { NavigatorScreenParams } from "@react-navigation/native";
export type BottomTabsParams = {
  Lesson: undefined;
  Game: undefined;
  Quiz: undefined;
};

export type RootStackParams = {
  TabNav?: undefined;
  LessonVideo: undefined;
  Game: undefined;
  AnswerQuizz: undefined;
  Puzzle: {
    id: string;
  };
  Lesson: undefined;
  Home: undefined;
  Quiz: undefined;
};
