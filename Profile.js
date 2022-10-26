//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

// create a component
const Profile = ({ route, navigation }) => {

    const { data } = route.params

    console.log("dataadata", data)

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const onPress = () => {
        navigation.navigate('Home', { data: [...data, ...[{ title, desc }]] })
    }

    return (
        <View style={styles.container}>


            <TextInput
                value={title}
                placeholder='Enter title'
                style={{
                    height: 43,
                    width: 200,
                    backgroundColor: 'grey',
                    paddingHorizontal: 8,
                    borderRadius: 8
                }}
                onChangeText={text => setTitle(text)}
            />

            <TextInput

                value={desc}
                placeholder='Enter Desc'
                style={{
                    height: 43,
                    width: 200,
                    backgroundColor: 'grey',
                    paddingHorizontal: 8,
                    marginTop: 8,
                    borderRadius: 8
                }}
                onChangeText={text => setDesc(text)}
            />

            <Button title='DONE' onPress={onPress} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default Profile;
