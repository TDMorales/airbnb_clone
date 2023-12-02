import { View, TextInput, Text, FlatList } from 'react-native'
import { React, useState } from 'react'
import styles from './styles'
import SearchBar from '../../components/SearchBar/SearchBar'
import searchResults from '../../assets/dummy_data/search'
import Entypo from 'react-native-vector-icons/Entypo'
const DestinationSearch = () => {
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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                }
            />
        </View>
    )
}

export default DestinationSearch