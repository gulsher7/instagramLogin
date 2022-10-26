//import liraries
import { useFocusEffect } from '@react-navigation/native';
import React, { Component, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

// create a component
const Home = ({ navigation, route }) => {

    const [data, setData] = useState([])



    const onPress = () => {
        navigation.navigate('Profile', { data: data })
    }


    useEffect(() => {
        if (!!route?.params?.data) {
            setData(route.params.data)
        }

    }, [route.params])

    const onDelete = (i) =>{
        
        let cloneArry = [...data]

        let removeItem = cloneArry.filter((val,inx)=>{
            if(inx !== i){
                return val
            }
        })
        setData(removeItem)
    }

    return (
        <View style={styles.container}>
    
            {data.map((val, i) => {
                return (
                    <TouchableOpacity
                    style={{marginBottom: 8, backgroundColor: 'pink', padding: 8, borderRadius: 8}}
                    onPress={()=>onDelete(i)} 
                    >
                        <Text>{val.title}</Text>
                        <Text >{val.desc}</Text>
                    </TouchableOpacity>
                )
            })}
            <Button title='Click me' onPress={onPress} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
