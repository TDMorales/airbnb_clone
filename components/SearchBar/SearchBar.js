import { View, Text, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import React from 'react'
import styles from './styles'


const SearchBar = ({ nav, screen }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonSearch} onPress={() => nav.navigate(screen)}>
                <Fontisto name='search' size={24} color={'#f15454'} />
                <Text style={styles.buttonSearchText}>Where are you going?</Text>
            </Pressable>
        </View>
    )
}

export default SearchBar