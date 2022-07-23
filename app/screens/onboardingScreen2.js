import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

function Screen2({ navigation }) {
  const pressHandler = () => {
    navigation.push("onboarding3");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/onboarding-2.png")}></Image>
      <Text style={styles.heading}>What is Reservo?</Text>
      <Text style={styles.paragraph}>
        Upload Your Images From Any Device. Lots of Free Storage for Your
        Images. Share on Facebook, Twitter, via Email & more. Secure Storage &
        Password Protected Albums. Unique Image Tools, Watermarking, Slideshows
        & more. {"\nHeroic Support Team"}
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
  image:{
    padding:30,
  },
  heading: {
    fontSize: 26,
    paddingTop: 70,
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

export default Screen2;
