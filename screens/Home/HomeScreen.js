import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles'
const HomeScreen = () => {
    return (
        <View>
            <Pressable style={styles.buttonSearch} onPress={() => console.warn('Search button has been pressed')}>
                <Fontisto name='search' size={24} color={'#f15454'} />
                <Text style={styles.buttonSearchText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground source={require('../../assets/images/wallpaper.jpg')} style={styles.image} >
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Button has been pressed')}>
                    <Text style={styles.buttonText}>Explore nearby places</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen