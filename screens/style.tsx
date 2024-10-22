
import React from "react";
import {StyleSheet, Text, View} from "react-native"

const aboutStyle = () => {
    return(
        <View style = {styles.container}>
            <Text>This is text without styling</Text>
            <Text style = {styles.red}>
                This is text with color only</Text>
            <Text style = {styles.bigBlue}>
                This is text with adjusting color and size</Text>
            <Text style = {[styles.red, styles.bigBlue]}>
                This is style start with red and then big blue.</Text>
            <Text style = {[styles.bigBlue, styles.red]}>
                This is big blue and then red</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize:30,
    },
    red: {
        color: 'red',
    },
});

export default aboutStyle;