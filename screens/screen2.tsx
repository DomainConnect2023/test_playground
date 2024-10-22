import {useState, useEffect} from "react";
import * as React from "react";
import {View, FlatList, StyleSheet, ActivityIndicator, ScrollView} from "react-native";
import {DataTable, Text} from "react-native-paper";

interface Recipe {
    id: number;
    name: string;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
  };

  export default function FlatListScreen() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState<'ascending'|'descending'>('ascending');
    const[sortField, setSortField] = useState<'id'|'name'>('name');

    useEffect(() => {fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            setRecipes(data.recipes.slice(0,100));
            setLoading(false);
        })
        .catch(error => console.error(error));
    }, []);

    const sortData = (field:'id'|'name') => {
      let sortedData = [...recipes];
      if(sortDirection === 'ascending'){
        sortedData = sortedData.sort((a,b) => (a[field] > b[field] ? 1:-1));
      } else {
        sortedData = sortedData.sort((a,b) => (a[field] < b[field] ? 1:-1));
      }
      setRecipes(sortedData);
      setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
      setSortField(field);
    };
    
    if(loading) {
        return(
            <View style = {{flex:1}}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )};

    const renderItem=({item} : {item:Recipe}) =>(
            <DataTable.Row style = {styles.cell}>
              <DataTable.Cell style={styles.idCell}>
                  <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{item.id}</Text>
                </DataTable.Cell> 

                <DataTable.Cell style={styles.nameCell}>
                  <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                </DataTable.Cell>    

                <DataTable.Cell style={styles.difficultyCell}>
                  <Text style={styles.text}>{item.difficulty}</Text>
                </DataTable.Cell>

                <DataTable.Cell style={styles.difficultyCell}>
                  <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{item.cuisine}</Text>
                </DataTable.Cell>

                <DataTable.Cell style={styles.calCell}>
                  <Text style={styles.text}>{item.caloriesPerServing}</Text>
                </DataTable.Cell>
            </DataTable.Row> 
        );

    return (
      <ScrollView>
        <DataTable>
            <DataTable.Header style = {styles.header}>
            <DataTable.Title style={styles.idCell}
                sortDirection = {sortField === 'id' ? sortDirection:undefined}
                onPress={() => sortData('id')}>
                  <Text style={styles.textHeader}>ID</Text>  
                </DataTable.Title>

                <DataTable.Title style={styles.nameCell}
                sortDirection = {sortField === 'name' ? sortDirection:undefined}
                onPress={() => sortData('name')}>
                  <Text style={styles.textHeader}>Name</Text>  
                </DataTable.Title>

                <DataTable.Title style={styles.difficultyCell}>
                  <Text style={styles.textHeader}>Difficulty</Text>  
                </DataTable.Title>

                <DataTable.Title style={styles.difficultyCell}>
                  <Text style={styles.textHeader}>Cuisine</Text>  
                </DataTable.Title>

                <DataTable.Title style={styles.calCell}>
                  <Text style={styles.textHeader}>Calories per Serving</Text>  
                </DataTable.Title>
                </DataTable.Header>

            <FlatList 
            data= {recipes}
            keyExtractor= {(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}/>
        </DataTable>    
        </ScrollView>    
    )};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      idCell: {
        flex:0.5
      },
      nameCell: {
        flex: 2,
        marginRight: 10,
        paddingLeft:4,
      },
      calCell: {
        paddingLeft: 3,
        flex:0.5, 
      },
      difficultyCell:{
        flex: 0.8,
        paddingLeft: 3,
      },
      header: {
        backgroundColor: 'pink',  
        borderBottomWidth: 0.8,
        borderColor: 'gray',
      },
      cell: {
        backgroundColor: 'rgba(255,228,225,1.0)',
        borderBottomWidth: 0.8,
        borderColor: 'gray',
        justifyContent: 'flex-start',
      },
      text: {
        fontWeight:'semibold',
        fontSize: 14,
        color: 'black',
        justifyContent: 'flex-start',
      },
      textHeader: {
        fontWeight:'bold',
        fontSize: 14,
        color: 'black',
      },
    });