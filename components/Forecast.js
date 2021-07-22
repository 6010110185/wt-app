import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text>{props.main}</Text>
        <Text style={styles.BText}>{props.main}</Text>
        <Text>{props.description}</Text>
    <View>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
            <Text style={styles.BText}>{props.temp}°C</Text>
        </View>
    </View>
    );
   }


   const styles = StyleSheet.create({    //กำหนด backdrop style 
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height:'100%'
    },
    BText: {
        fontSize: 20
    },
    BBlack:{
        justifyContent: 'center', //center แนวแกนตั้ง
        alignItems: 'center', //center แนวแกนนอน
        backgroundColor: 'rgba(0,0,0,0.3)',
        height:'50%',
        width:'100%'
    }
}) 