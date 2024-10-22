import React from 'react';
import {Text, ScrollView, Image} from 'react-native';

const getStyles = (type: string) => {
   if(type ==='image')
   {
      return{
         marginVertical: 20,
         width: 350,
         height: 350,
         alignself: 'center',         
      };
   }
   else if(type ==='text')
   {
      return{
         marginVertical: 20,
         fontSize: 25,
         alignself: 'center',         
      };
   }
};

const pic1 = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jackson_Yee_in_201911_by_Tmall_Double_Eleven_Party_%28cropped%29.jpg/240px-Jackson_Yee_in_201911_by_Tmall_Double_Eleven_Party_%28cropped%29.jpg',
   //  width:350,
   //  height:350,
};
const pic2 = {
    uri: 'https://pbs.twimg.com/media/FnPQpSuaYAIx1lY.jpg',
   //  width:350,
   //  height:350,
};
const pic3 = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRP6AaxsA14H55DdL9eGhTqxhIX6l_QvEL7A&s',
   //  width:350,
   //  height:350,
};
const pic4 = {
   uri: 'https://pbs.twimg.com/media/GUSZreMbYAAvUMZ?format=jpg&name=large',
   // width:350,
   // height:350,
};

const MyScrollView = () => (
       <ScrollView contentContainerStyle={{alignItems:'center'}}>
               <Text style = {{fontSize:25, marginTop: 30, marginBottom: 20}}> Scroll me to view all the picture.</Text>
               <Image source = {pic1} style = {getStyles('image')}/>
               <Text style = {getStyles('text')}> This is Jackson Yee.</Text>
               <Image source = {pic2} style = {getStyles('image')}/>
               <Text style = {getStyles('text')}> He is an actor</Text>
               <Image source = {pic3} style = {getStyles('image')}/>
               <Text style = {getStyles('text')}> He is also a singer</Text>
               <Image source = {pic4} style = {getStyles('image')}/>
         </ScrollView>
   );
   
// const MyScrollView = () => (
//     <ScrollView contentContainerStyle={{alignItems:'center'}}>
//         <Text style = {{fontSize:25, marginTop: 30, marginBottom: 20}}>Scroll me to view all the picture.</Text>
//         <Image source = {pic1}
//                style = {{marginVertical: 20}}/>
//         <Text style = {{fontSize:25, marginVertical: 20}}>This is Jackson Yee.</Text>
//         <Image source = {pic2}
//                style = {{marginVertical: 20}}/>
//         <Text style = {{fontSize:25, marginVertical: 20}}>He is an actor</Text>
//         <Image source = {pic3}
//                style = {{marginVertical: 20}}/>
//         <Text style = {{fontSize:25, marginVertical: 20}}>He is also a singer</Text>
//         <Image source = {pic4}
//                style = {{marginVertical: 20}}/>

//         </ScrollView>
// );

export default MyScrollView;