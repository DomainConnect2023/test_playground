//height and width
import React from "react";
import {View, Text, StyleSheet} from "react-native"

const Dimension = () => {
    return(
        <View style = {{flex:1}}>
         <View style = {styles.con1}></View>
         <View style = {styles.con2}></View>
         <Text></Text><FlexDimension />
         <Text></Text><PercentageDimension />
         
        </View>
    );
};

const styles = StyleSheet.create({
//fixed dimensions
    con1 : {width: 300, height: 50, backgroundColor: 'red'},
    con2 : {width: 350, height: 50, backgroundColor: 'orange'},
});

//flex dimensions
const FlexDimension = () => {
   const styles = StyleSheet.create({
      flexContainer: {flex: 1},
      flex1: {flex: 1, backgroundColor: 'yellow'},
      flex2: {flex: 2, backgroundColor: 'green'}, 
      flex3: {flex: 3, backgroundColor: 'blue'},
   });
    return(
    <View style= {styles.flexContainer}>
      <View style= {styles.flex1}/>
      <View style= {styles.flex2}/>
      <View style= {styles.flex3}/>
    </View>
    );
};

//percentage dimensions
const PercentageDimension = () => {
   const styles = StyleSheet.create({
      flexContainer: {height: '28%'},
      Pflex1: {height: '50%', backgroundColor: 'indigo'},
      Pflex2: {width: '60%', height: '40%', backgroundColor: 'purple'},
   })

   return(
   <View style= {styles.flexContainer}>
      <View style= {styles.Pflex1}/>
      <View style= {styles.Pflex2}/>
    </View>
   );
};

export default Dimension;