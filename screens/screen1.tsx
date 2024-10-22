import * as React from 'react';
import {useState} from "react";
import {TextInput, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlatListScreen from './screen2';

const HomeScreen = () => {
  const [text, setText] = useState('');

const handlePress = () => {
    Alert.alert('Hello World');
};

  return(
  <View>
    <View style = {styles.topBarContainer}>
        <Text style = {styles.topBarText}>Centered Text</Text>
    </View>
    <View> 
        <TextInput style = {styles.textInput}
        placeholder = "Type here ......"
        onChangeText={newText => setText(newText)}
        defaultValue={text}/>
        <TouchableOpacity style = {styles.button} onPress={handlePress}>
           <Text style = {styles.buttonText}>Submit</Text> 
        </TouchableOpacity>
    </View>
  </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused ? "home" : "home-outline";
                }else if(route.name ==='List'){
                    iconName = focused ? 'list' : 'list-outline';
                }
                return <Ionicons name={iconName ?? ""} size={size} color={color}/>;
            },
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: styles.tabLabel,
        })}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="List" component={FlatListScreen}/>
        </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: 'column',
        padding: 8,
        backgroundColor: 'pink',
        minHeight: 50,
    },
    topBarText: {
        fontSize: 20,
        fontWeight:'500',
        textAlign: 'center',
    },
   
    textInput: {
        minHeight: 200,
        minWidth: 80,
        marginBottom: 20,
        marginVertical: 20,
        marginHorizontal: 15,
        backgroundColor: 'rgba(255,228,225,1.0) ',
        borderColor: 'rgba(112,128,144,1.0)',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 15,
        borderRadius: 5,
    },
    button: {
        marginHorizontal: 140,
        marginVertical: 5,
        paddingVertical: 8,
        backgroundColor: 'rgba(255,228,225,1.0) ',
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(112,128,144,1.0)',
    },
    buttonText: {
        fontSize: 15,
        fontWeight:'900',
        color: 'rgba(50,50,50,0.8)',
    },
    tabBar: {
        backgroundColor:'pink',
        height: 55,
    },
    tabLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
});
