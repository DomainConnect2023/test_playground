import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const Flex = () => {
    return(
        <View
        style={[
            styles.container,
            {
                flexDirection: 'column',
            }
        ]}>
        <View style={{flex: 1, backgroundColor:'red'}}></View>
        <View style={{flex: 2, backgroundColor:'blue'}}></View>
        <View style={{flex: 2, backgroundColor:'green'}}></View>
        </View>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Flex;