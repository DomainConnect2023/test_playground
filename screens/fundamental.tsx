import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';

// 1------------------------------------------------
// export default class App extends React.Component {
//   state = {
//    myState: 'Lesson 1'
//   }
//   render() {
//       return (
//          <View>
//             <Text>{this.state.myState}</Text>
//          </View>
//       );
//    }
// }

// 2------------------------------------------------------
// const getName = (
//    name1: string,
//    name2:string,
//    name3: string,
// ) =>{
//    return name1 + ', ' + name2 + ', ' + name3;
// };

// const Lesson = () =>{
//    return (
//    <View>
//       <Text> Learning React Native {getName('Lesson1', 'Lesson2', 'Lesson3')}</Text>
//    </View>
//    );
// };

// 3-Text Input----------------------------------------------
// const Lesson = () => {
//    return (
//       <View>
//          <Text>Lesson... </Text>
//          <TextInput
//             style={{
//                height: 40,
//                borderColor: 'black',
//                borderWidth: 1,
//             }}
//             defaultValue="Lesson"
//          />
//       </View>
//    );
// };

// 4---------------------------------------------------
// const Learning = () => {
//    return (
//       <View>
//          <Text>React Native</Text>
//       </View>
//    );
// };

// const Lesson = () => {
//    return(
//       <View>
//          <Text>Learning is fun!</Text>
//          <Learning />
//          <Learning />
//          <Learning />
//       </View>
//    );
// };

// 5 - props and image------------------------------------
// type LessonProps = {
//    name: string;
// };

// const Learning = (props: LessonProps) => {
//    return(
//       <View>
//          <Text>React Native element: {props.name}</Text>
//       </View>
//    );
// };

// const Lesson = () => {
//    return(
//       <View>
//          <Image 
//             source={{
//                uri:'https://flatirons.com/static/c8cb21eccc0362e40279fcefdbc7d9b6/d7e39/The-Unofficial-Guide-to-React-Native-1.webp',
//             }}
//             style={{width:500, height:250}}
//             />
//          <Text>
//             <Learning name="Props" />         
//             <Learning name="State" />
//             <Learning name="Text Input" />
//          </Text>         
//       </View>
//    );
// };

type LessonProps = {
   name: string;
};

const Learning = (props: LessonProps) => {
   const [isGood, setIsGood] = useState(true);

   return(
      <View>
         <Text>React Native element: {props.name} and this is {isGood? 'good' : 'bad'}</Text>
         <Button 
         onPress={()=>{
            setIsGood(false);}}
            disabled={!isGood}
            title={isGood? 'I love coding!':'I hate coding!'}
         />
      </View>
   );
};

const Lesson = () => {
   return(
      <View>
         <Image 
            source={{
               uri:'https://flatirons.com/static/c8cb21eccc0362e40279fcefdbc7d9b6/d7e39/The-Unofficial-Guide-to-React-Native-1.webp',
            }}
            style={{width:500, height:250}}
            />
         <Text>
            <Learning name="Props" />         
            <Learning name="State" />
            <Learning name="Text Input" />
         </Text>         
      </View>
   );
};


export default Lesson;