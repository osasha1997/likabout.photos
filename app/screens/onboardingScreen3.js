import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

function Screen3(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/onboarding-3.png")}></Image>
      <Text style={styles.heading}>Powerful Features</Text>
      <Text style={styles.paragraph}>
        {
          "\nUnique Image Manager\nSafe & Secure\nStored in the Cloud\nFast Image Searching\nPrivate Albums\n Always On"
        }
      </Text>
      <View style={styles.button}>
        <Button color="white" title=">"></Button>
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
    paddingTop: 70,
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 16,
    padding: 20,
    textAlign: "center",
    textTransform: "uppercase",
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

export default Screen3;
