import { View, StyleSheet, Text, FlatList } from "react-native"
import axios from "axios";
import { useEffect, useState } from 'react';



const Asteroid = ({ navigation, route }: any) => {
    const [asteroidData, setAsteroidData] = useState<any>([])
    const [details,setDetails]= useState<any>([])
    const [error, setError] = useState(false)
    const asteroidId = route.params.asteroidId

    const nasaAPI = axios.create({
        baseURL: "https://api.nasa.gov/"
    })

    const getAsteroidDetails = () => {

        nasaAPI.get(`/neo/rest/v1/neo/${asteroidId}?api_key=t3cGQFvrHF51nin4alfdqDGfeRoYe8DZQ4cx9yrq`)
            .then((response: any) => setAsteroidData(details.concat(response.data)))
            .catch((error: any) => setError(true))
    }
   console.log("ABC",setAsteroidData)
    useEffect(() => getAsteroidDetails(), [])
    
    
    return (

        <View style={{ flex: 1 }}>
            {error && <Text style= {styles.invalid}> Please enter proper Id</Text>}
            <View>
                <FlatList
                    data={asteroidData}
                    renderItem={(item:any) => {
                        
                        return (
                            <View style ={styles.listView}>
                                <Text style ={styles.text}>Name : {item?.item?.name}</Text>
                                <Text style ={styles.text}> nasa_jpl_url : {item?.item?.nasa_jpl_url}</Text>
                                <Text style ={styles.text}> is_potentially_hazardous_asteroid : {item?.item?.is_potentially_hazardous_asteroid}</Text>
                               
                           
                           
                            </View>
                        )
                    }}
                    
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
        color :"#fc4103",
        padding :"25%",
        fontSize: 18
    }
})
export default Asteroid;
