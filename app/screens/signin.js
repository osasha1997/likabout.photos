import React, { Component } from 'react';
import {StyleSheet,SafeAreaView,View,Text,Image, TextInput, Button} from 'react-native';

function Signin(){
    const [text, onChangeText] = React.useState(null);
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.png")}/>
            <View style={styles.form}>
                <Text style={styles.textForm}>Email Address: </Text>
                <TextInput
                    style={styles.input}
                    value={text}
                />
                <Text style={styles.textForm}>Password: </Text>
                <TextInput
                    style={styles.input}
                    value={text}
                />
                <View style={styles.center}>
                    <View style={styles.btnSignin}>
                        <Button style={styles.button} color='white' title="Sign In"></Button>
                    </View>
                </View>
                <Text style={styles.small}>Don’t have an account? Sign up</Text>
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
        width: 120,
        height: 100,
        marginBottom:15,
    },
    form:{
        width:'95%',
    },
    textForm: {
        color: '#C1C1C1',
        marginBottom: 5,
    },
    input:{
        height: 40,
        borderWidth: 1,
        width:"100%",
        marginBottom: 20,
        borderColor: '#C1C1C1',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",

    },
    btnSignin:{
        backgroundColor: '#D93600',
        color: 'white',
        width:'75%',
        marginBottom: 20,
    },
    small:{
        fontSize: 12,
        textAlign: 'right',
        color: '#008080',
        textDecorationLine: 'underline'    
    },
  });
  
export default Signin;
  