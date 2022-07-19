import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Button,TextInput } from 'react-native-paper';

const Home = ({navigation}:any) => {
    const [asteroidId,setasteroidId] = useState<any>([])
    const handleIDNavigation =()=> {
      
     console.log(asteroidId)       
        navigation.navigate("Asteroid Details",{asteroidId})
        
    }
    const handleRandomNavigation =()=> {
      
               
           navigation.navigate("Random Asteroid Details")
           
       }
    console.log("abcd",asteroidId.id)
    return(
        <View style ={styles.container}>
        
           <TextInput
             style={styles.input}
            mode='flat'
            value = {asteroidId}
            onChangeText = {setasteroidId}
            label = "Enter Asteroid ID"/>
            <Button mode='contained'
            style = {styles.button}
             uppercase = {false}
             disabled = {!asteroidId}
             onPress = {handleIDNavigation}>Submit</Button>
            <Button mode='contained'
            style = {styles.button}
             uppercase = {false}
             onPress = {handleRandomNavigation}>RandomAsteroid</Button>
        </View>   
       )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        // backgroundColor : "#e1e8e5",
        justifyContent : "center",
        alignItems : "center"
     },
    input :{
        height : 60,
        width : "80%",
       
    },
    button : {
        marginTop : 50,
        backgroundColor :'#6d94ed',
        width : "50%",
        borderRadius: 15

    }
});
export default  Home;
  