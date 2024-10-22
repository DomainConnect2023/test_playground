import React from "react";
import {Text, View, FlatList, StyleSheet} from "react-native";

//two types of list view : flat list and section list
const myFlatList = () =>{
    return(
        <View style = {styles.container}>
        <FlatList data={[
            {key:'David'},
            {key:'Dissy'},
            {key:'Danny'},
            {key:'Jackson'},
            {key:'Jack'},
            {key:'Joe'},
            {key:'Jay'},
            {key:'Jimmy'},
            {key:'Jeff'},
            {key:'Zac'}, 
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            paddingTop: 10,
        },
        item:
        {
            padding: 10,
            fontSize: 30,
        },
    }
);

export default myFlatList;