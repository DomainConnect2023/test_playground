import React from "react";
import {Text, View, SectionList, StyleSheet} from "react-native";

//two types of list view : flat list and section list
const mySectionList = () => {
    return(
        <View style = {styles.container}>
            <SectionList sections={[
                {
                    title: 'D', 
                    data: ['Dissy', 'Danny', 'David', 'Diana', 'Delson']
                },
                {   
                    title: 'J', 
                    data: ['Jackson', 'Jack', 'Joe', 'Jay', 'Jimmy', 'Jeff']
                },
                {   
                    title: 'Z', 
                    data: ['Zac', 'Zacky', 'Zoe']
                },
            ]}
            renderItem = {({item}) => <Text style = {styles.item}> {item} </Text>}
            renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}> {section.title} </Text>}
            keyExtractor = {item => `basicListEntry-${item}`}
            />
        </View>
    )
};
            
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 5,
    },
    sectionHeader:{
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 25, 
        fontWeight: 'bold',
        backgroundColor: 'rgba(100,247,247,1.0)',
    },
    item:{
        padding: 10,
        fontSize: 20,
        height: 55,
    },
});

export default mySectionList;
