import { View, TextInput, Text, FlatList, Pressable } from 'react-native'
import { React, useState } from 'react'
import styles from './styles'
import SearchBar from '../../components/SearchBar/SearchBar'
import searchResults from '../../assets/dummy_data/search'
import Entypo from 'react-native-vector-icons/Entypo'
const DestinationSearch = ({ navigation }) => {
    const [input, setInput] = useState('')
    return (
        <View style={styles.container}>
            {/* INPUT COMPONENT */}
            <TextInput
                style={styles.textInput}
                placeholder='Where are you going?'
                value={input}
                onChangeText={setInput}
            />

            {/* LIST OF DESTINATIONS */}
            <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                    <Pressable style={styles.row} onPress={() => navigation.navigate("Guest Page")}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                }
            />
        </View>
    )
}

export default DestinationSearch