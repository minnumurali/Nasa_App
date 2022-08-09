import { View, StyleSheet, Text, FlatList } from "react-native"
import axios from "axios";
import { useEffect, useState } from 'react';

 export type details = {
    name :string,
    nasa_jpl_url :string,
    is_potentially_hazardous_asteroid :string,
    id :number



 }

const RandomAsteroid = ({}: any) => {
    
        const [randomid, setRandomid] = useState<details>([])
        const [randomData,setRandomData] = useState<details>([])
        const [id,setId] =useState<any>([])
         const [error, setError] = useState(false)
    
    
        const countryAPI = axios.create({
            baseURL: "https://api.nasa.gov/"
        })
    
        const getRandomId = () => {
            
    
            countryAPI.get(`neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
                .then((response: any) =>setRandomid(id.concat(response.data.near_earth_objects)))
                // {const { data } = response;
                // const { near_earth_objects } = data;
                // const asteroidArray =
                //   near_earth_objects[Object.keys(near_earth_objects)[0]];
                // const randomIds = asteroidArray.map((item: any) => {
                //   return item.id;
                // });
                // setRandomid(randomIds);
                // console.log(setRandomid)
            //   })
                .catch((error: any) => setError(true))
                
        }
       
        useEffect(() => getRandomId(), []) 
    
    
         const ids = randomid.id
        // console.log(ids)
     
 
    
    
    
    
    
    
    
    
    
        return (
    
            <View style={{ flex: 1 }}>
               
                 <View>
                    <FlatList
                        data={randomid}
                        renderItem={(item:any) => { 
                            
                            return ( 
                                <View style ={styles.listView}>
                                    <Text style ={styles.nameText}>Name : {item?.item?.name}</Text>
                                    <Text style ={styles.urlText}> nasa_jpl_url : {item?.item?.nasa_jpl_url}</Text>
                                    <Text style ={styles.text}>is_potentially_hazardous_asteroid : {item?.item?.is_potentially_hazardous_asteroid?'True':'False'}</Text>
                                   
                               
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
    urlText :{
        fontSize : 16,
        marginBottom : 20,
        fontWeight:"italics"
      },
    nameText :{
        fontSize : 16,
        marginBottom : 20,
        fontWeight:"bold"
      },
    listView:{
        padding: 20,
        borderRadius: 1,
        borderStartColor:"#171717",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:3,
        marginTop:2,
        margin:"2%",
    },
    invalid :{
        color :"#a83232"
        
    }
})
export default RandomAsteroid;
