import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./app/screens/onboardingScreen1";
import Navigator from "./routes/homeStack";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({});
