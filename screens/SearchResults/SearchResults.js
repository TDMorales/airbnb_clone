import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from '../../components/Post/Post';
import styles from './styles';

const SearchResults = ({ posts }) => {
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <Post post={item} />} />
        </View>
    )
}

export default SearchResults