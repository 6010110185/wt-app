import React, { useEffect, useState } from 'react'
import { Text,ImageBackground,StyleSheet,View} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e43eb205a5989742ed3dd683e08dd2f8`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                    });
                })
            .catch((error) => {
                console.warn(error);
                });
            }
        }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        main: 'main',
        description: 'description',
        temp: 0
        })
    return (
        <View>
            <ImageBackground source={require('../clear-blue-sky.jpeg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
            <View style={styles.BBlack}>
                <Text style={styles.BText}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({    
    backdrop: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    BText: {
        fontSize: 30
    },

    BBlack:{
        justifyContent: 'center', //center แนวแกนตั้ง
        alignItems: 'center', //center แนวแกนนอน
        backgroundColor: 'rgba(0,0,0,0.3)',
        height:'50%',
        width:'100%'
    }

}); 