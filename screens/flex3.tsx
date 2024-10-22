import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import type { PropsWithChildren } from "react";

const JustifyContent = () => {
    const [justifyContent, setJustifyContent] =
    useState('flex-start');

    return(
    <PreviewLayout 
        label ='justifyContent'
        selectedValue = {justifyContent}
        values = {[
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
        ]}
        setSelectedValue={setJustifyContent}>
            <View style = {[styles.box,{backgroundColor: 'powderblue'}]}></View>
            <View style = {[styles.box,{backgroundColor: 'skyblue'}]}></View>
            <View style = {[styles.box,{backgroundColor: 'steelblue'}]}></View>
        </PreviewLayout>
    );
};

type PreviewLayoutProps = PropsWithChildren<{
    label:string;
    values:string[];
    selectedValue:string;
    setSelectedValue:(value:string) => void;
}>;

const PreviewLayout = ({
    label,
    children,
    values, 
    selectedValue,
    setSelectedValue,
} : PreviewLayoutProps) => (
    <View style={{padding: 10, flex: 1}}>
        <Text style = {styles.label}>{label}</Text>
        <View style = {styles.row}>
            {values.map(value=>(
                <TouchableOpacity 
                key = {value}
                onPress={()=>setSelectedValue(value)}
                style= {[styles.button, selectedValue===value&&styles.selected]}>
                    <Text
                    style={[
                        styles.buttonLabel,
                        selectedValue === value && styles.selectedLabel,
                    ]}>
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style ={[styles.container, {[label]: selectedValue}]}>
            {children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 80,
        height: 80,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: '500',
        color: 'coral',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
});

export default JustifyContent;
