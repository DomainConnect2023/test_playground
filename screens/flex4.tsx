import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import type { PropsWithChildren } from "react";

const AlignItemsLayout = () => {
    const [alignItems, setAlignItems] = useState('stretch');

    return(
        <PreviewLayout
            label= 'alignItems'
            selectedValue= {alignItems}
            values= 
            {['stretch',
              'flex-start',
              'flex-end',
              'center',
              'baseline',]}
            setSelectedValue = {setAlignItems}>
            <View style = {[styles.box,{backgroundColor: 'powderblue'}]}></View>    
            <View style = {[styles.box,{backgroundColor: 'steelblue'}]}></View>    
            <View style = {[styles.box,{backgroundColor: 'skyblue'}]}></View>    
            <View style = {[styles.box,
                            {
                            backgroundColor: 'steelblue',
                            width:'auto',
                            minWidth: 50,
                            },
                        ]}></View>
        </PreviewLayout>
    );
};

type PreviewLayoutProps = PropsWithChildren<{
    label: string;
    values:string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}>;

const PreviewLayout  = (
    {label, values, selectedValue, children, setSelectedValue}
    :PreviewLayoutProps) => (
        <View style = {{padding: 10, flex:1}}>
            <Text style = {styles.label}>{label}</Text>
            <View style = {styles.row}>
                {values.map(value => (
                    <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[styles.button, 
                        selectedValue === value && styles.selected]}>
                    <Text 
                    style={[styles.buttonLabel, 
                        selectedValue === value && styles.selectedLabel]}>
                    {value}
                    </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={[styles.container, {[label]:selectedValue}]}>
                {children}
            </View>
        </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
        minHeight: 200
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
      button: {
        paddingHorizontal: 8,
        paddingVertical: 15,
        marginHorizontal: '1%',
        marginBottom: 8,
        borderRadius: 15,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        minWidth: '45%',
        textAlign: 'center',
    },
       selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
       buttonLabel: {
        fontSize: 15,
        fontWeight: '500',
        color: 'coral',
  },
       selectedLabel: {
         color: 'white',
  },
       label: {
        marginBottom: 10, 
        fontSize: 15,
        textAlign: 'center'
    },
}
);

export default AlignItemsLayout;
