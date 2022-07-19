import { View, StyleSheet, Text, FlatList } from "react-native"
import axios from "axios";
import { useEffect, useState } from 'react';



const RandomAsteroid = ({}: any) => {
    
        const [randomid, setrandomid] = useState<any>([])
        const [randomData,setRandomData] = useState<any>([])
        const [id,setId] =useState<any>([])
         const [error, setError] = useState(false)
    
    
        const countryAPI = axios.create({
            baseURL: "https://api.nasa.gov/"
        })
    
        const getRandomId = () => {
            
    
            countryAPI.get(`neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
                .then((response: any) => setrandomid(randomData.concat(response.data.id)))
                .catch((error: any) => setError(true))
        }
        // console.log(getRandomId)
        useEffect(() => getRandomId(), []) 
    
    
         const ids = randomid.id
        // console.log(ids)
     
    //    const newid= randomData.id
    
    
    
    
       
       const getId = () => {
            
    
        countryAPI.get(`neo/rest/v1/neo/${randomid}?api_key=t3cGQFvrHF51nin4alfdqDGfeRoYe8DZQ4cx9yrq`)
            .then((response: any) => setId(response.get))
            .catch((error: any) => setError(true))
    }
    console.log(getId)
    useEffect(() => getId(), []) 
    
    
    
    
        return (
    
            <View style={{ flex: 1 }}>
               
                 <View>
                    <FlatList
                        data={randomid}
                        renderItem={(item:any) => { 
                            
                            return ( 
                                <View style ={styles.listView}>
                                    <Text style ={styles.text}>Name : {randomid.name}</Text>
                                    <Text style ={styles.text}> nasa_jpl_url : {randomid. nasa_jpl_url}</Text>
                                    <Text style ={styles.text}>is_potentially_hazardous_asteroid : {randomid.is_potentially_hazardous_asteroid}</Text>
                                   
                               
                                </View>
    
                            ) 
                         }}
                        keyExtractor={(item : any) => Math.random().toString(16).slice(2)}
                    /> 
                </View>
            
    
            </View>
    
        )


};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent :"center",
        alignItems : "center",
    },

    text :{
      fontSize : 16,
      marginBottom : 20
    },
    listView:{
        padding :20
    },
    invalid :{
        color :"#a83232"
        
    }
})
export default RandomAsteroid;
