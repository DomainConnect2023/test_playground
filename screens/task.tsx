import React from "react";
import {Text, View, StyleSheet} from "react-native";

const HomeScreen = () => {
    <View style = {styles.topBarContainer}>
        <Text style = {styles.topBarText}>Centered Text</Text>
    </View>
}

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: 'column',
        padding:5,
        textAlign: 'center' ,
    },
    topBarText: {
        fontSize: 20,
        fontWeight:'500',
        color: 'pink',
    },
});

export default HomeScreen;