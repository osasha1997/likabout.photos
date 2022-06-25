import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

function Screen1({ navigation }) {
  const pressHandler = () => {
    navigation.push("onboarding2");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/onboarding-1.png")}></Image>
      <Text style={styles.heading}>Powerful Image Hosting</Text>
      <Text style={styles.paragraph}>
        Upload, access, organize, edit, and share your photos from any device,
        from anywhere in the world.
      </Text>
      <View style={styles.button}>
        <Button color="white" title=">" onPress={pressHandler}></Button>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 26,
    paddingTop: 20,
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 16,
    padding: 20,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    right: 30,
    bottom: 80,
    backgroundColor: "#444",
    height: 40,
    width: 40,
    borderRadius: "50%",
  },
});

export default Screen1;
