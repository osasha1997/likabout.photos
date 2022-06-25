import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Screen1 from "../app/screens/onboardingScreen1";
import Screen2 from "../app/screens/onboardingScreen2";
import Screen3 from "../app/screens/onboardingScreen3";

const screens = {
  onboarding1: {
    screen: Screen1,
    navigationOptions: {
      header: null,
    },
  },
  onboarding2: {
    screen: Screen2,
    navigationOptions: {
      header: null,
    },
  },
  onboarding3: {
    screen: Screen3,
    navigationOptions: {
      header: null,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
