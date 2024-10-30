import React, { useState, useEffect } from "react"; 
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";

interface ArrayObject {
    id: number;
    name: string;
    isActive: boolean;
}

interface DataStructure {
    nullKey: null;
    floatKey: number;
    stringKey: string;
    emptyArray: any[];
    integerKey: number;
    mixedArray: (number | string | null | boolean | { nested: string })[];
    emptyObject: object;
    nestedObject: {
        key1: string;
        key2: number;
        key3: {
            subKey1: string;
            subKey2: number[];
        };
    };
    arrayOfObjects: ArrayObject[]; // Step 1: Define the type of arrayOfObjects
    arrayOfStrings: string[];
    booleanKeyTrue: boolean;
    arrayOfIntegers: number[];
    booleanKeyFalse: boolean;
}

export default function DataDisplayScreen() {
    const [data, setData] = useState<DataStructure | null>(null); // Step 2: Use type assertion
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Adjusting the error state type

    useEffect(() => {
        fetch('https://api.npoint.io/6639b755545677bf4e75')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not good');
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error.message); // Step 5: Set error message
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error: {error}</Text> {/* Step 5: Display error message */}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>JSON Data</Text>
            {data && data.arrayOfObjects ? ( // Check if data and arrayOfObjects exist
                data.arrayOfObjects.map(item => (
                    <Text key={item.id} style={styles.jsonText}>
                        Name: {item.name}, Active: {item.isActive ? 'Yes' : 'No'}
                    </Text>
                ))
            ) : (
                <Text>No data available</Text> // Fallback if no arrayOfObjects
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
        justifyContent:'center',
        alignItems: 'center',
    },
    jsonText: {
        fontSize: 16,
    },
});

