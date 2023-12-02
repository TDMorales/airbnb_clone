import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import SearchBar from '../../components/SearchBar/SearchBar'
const HomeScreen = () => {
    return (
        <View>
            <SearchBar />
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